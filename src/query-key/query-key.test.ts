import { describe, it, expect, beforeEach } from "bun:test";
import {
  stableSerialize,
  serializeQueryKey,
  createQueryKey,
  isValidQueryKeyValue,
  normalizeQueryKey,
  hashQueryKey,
  serializeQueryKeyWithHash,
  type QueryKey,
  type NormalizedKey,
} from "./";

describe("Query Key Serialization", () => {
  it("is stable regardless of object key order", () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { c: 3, b: 2, a: 1 };

    expect(stableSerialize(obj1)).toBe(stableSerialize(obj2));
  });

  it("handles nested objects deterministically", () => {
    const nested1 = { user: { id: "123", name: "John" } };
    const nested2 = { user: { name: "John", id: "123" } };

    expect(stableSerialize(nested1)).toBe(stableSerialize(nested2));
  });

  it("preserves array order while stabilizing object elements", () => {
    const arr1 = [1, 2, { a: 1, b: 2 }];
    const arr2 = [1, 2, { b: 2, a: 1 }];

    expect(stableSerialize(arr1)).toBe(stableSerialize(arr2));
  });

  it("produces identical query keys regardless of param order", () => {
    const key1 = createQueryKey("GET", "/users/{id}", { id: "123", page: 1 });
    const key2 = createQueryKey("GET", "/users/{id}", { page: 1, id: "123" });

    expect(serializeQueryKey(key1)).toBe(serializeQueryKey(key2));
  });

  it("serializes Date objects as ISO strings", () => {
    const date = new Date("2024-01-01T00:00:00Z");
    const serialized = stableSerialize(date);

    expect(serialized).toContain("2024-01-01");
  });

  it("rejects invalid query key values in development", () => {
    expect(isValidQueryKeyValue(() => {})).toBe(false);
    expect(isValidQueryKeyValue(Symbol("test"))).toBe(false);
  });

  describe("normalizeQueryKey", () => {
    it("returns NormalizedKey tuple with serialized params", () => {
      const key: QueryKey = ["GET", "/users/{id}", { id: "123" }];
      const normalized = normalizeQueryKey(key);

      expect(normalized).toHaveLength(3);
      expect(normalized[0]).toBe("GET");
      expect(normalized[1]).toBe("/users/{id}");
      expect(normalized[2]).toBe('{"id":"123"}');
    });

    it("produces identical normalized keys for equivalent inputs", () => {
      const key1: QueryKey = ["GET", "/users", { a: 1, b: 2 }];
      const key2: QueryKey = ["GET", "/users", { b: 2, a: 1 }];

      const norm1 = normalizeQueryKey(key1);
      const norm2 = normalizeQueryKey(key2);

      expect(norm1).toEqual(norm2);
    });
  });

  describe("fail-fast behavior", () => {
    it("throws error when serializing functions", () => {
      expect(() => stableSerialize(() => {})).toThrow(
        "Cannot serialize function in query key"
      );
    });

    it("throws error when serializing symbols", () => {
      expect(() => stableSerialize(Symbol("test"))).toThrow(
        "Cannot serialize symbol in query key"
      );
    });
  });

  describe("undefined key handling", () => {
    it("drops undefined keys by default", () => {
      const obj1 = { a: 1, b: undefined };
      const obj2 = { a: 1 };

      expect(stableSerialize(obj1)).toBe(stableSerialize(obj2));
    });

    it("preserves undefined keys when dropUndefinedKeys is false", () => {
      const obj1 = { a: 1, b: undefined };
      const obj2 = { a: 1 };

      const serialized1 = stableSerialize(obj1, { dropUndefinedKeys: false });
      const serialized2 = stableSerialize(obj2, { dropUndefinedKeys: false });

      expect(serialized1).not.toBe(serialized2);
      expect(serialized1).toContain("undefined");
    });
  });

  describe("special number serialization", () => {
    it("serializes NaN as 'NaN'", () => {
      expect(stableSerialize(NaN)).toBe('"NaN"');
    });

    it("serializes Infinity as 'Infinity'", () => {
      expect(stableSerialize(Infinity)).toBe('"Infinity"');
    });

    it("serializes -Infinity as '-Infinity'", () => {
      expect(stableSerialize(-Infinity)).toBe('"-Infinity"');
    });

    it("handles special numbers in arrays", () => {
      const arr = [NaN, Infinity, -Infinity];
      const serialized = stableSerialize(arr);

      expect(serialized).toContain('"NaN"');
      expect(serialized).toContain('"Infinity"');
      expect(serialized).toContain('"-Infinity"');
    });

    it("handles special numbers in objects", () => {
      const obj = { nan: NaN, inf: Infinity, negInf: -Infinity };
      const serialized = stableSerialize(obj);

      expect(serialized).toContain('"NaN"');
      expect(serialized).toContain('"Infinity"');
      expect(serialized).toContain('"-Infinity"');
    });
  });

  describe("hashing", () => {
    it("hashes a serialized key", async () => {
      const serialized = "GET:/users/{id}:{\"id\":\"123\"}";
      const hashed = await hashQueryKey(serialized);

      expect(hashed.hash).toBeTruthy();
      expect(hashed.original).toBe(serialized);
      expect(typeof hashed.hash).toBe("string");
    });

    it("produces consistent hashes for same input", async () => {
      const serialized = "GET:/users/{id}:{\"id\":\"123\"}";
      const hash1 = await hashQueryKey(serialized);
      const hash2 = await hashQueryKey(serialized);

      expect(hash1.hash).toBe(hash2.hash);
    });

    it("hashes long keys when threshold is exceeded", async () => {
      const longParams = { data: "x".repeat(2000) };
      const key = createQueryKey("GET", "/endpoint", longParams);

      const result = await serializeQueryKeyWithHash(key, { hashThreshold: 100 });

      // Should be a hash (hex string, much shorter than original)
      expect(result.length).toBeLessThan(100);
      expect(/^[0-9a-f]+$/.test(result)).toBe(true);
    });

    it("does not hash short keys", async () => {
      const key = createQueryKey("GET", "/users/{id}", { id: "123" });

      const result = await serializeQueryKeyWithHash(key, { hashThreshold: 1024 });

      // Should be the original serialized string
      expect(result).toContain("GET");
      expect(result).toContain("/users/{id}");
    });
  });

  describe("circular reference detection", () => {
    it("detects circular references in objects", () => {
      const obj: any = { a: 1 };
      obj.self = obj;

      expect(isValidQueryKeyValue(obj)).toBe(false);
    });

    it("detects circular references in arrays", () => {
      const arr: any[] = [1, 2];
      arr.push(arr);

      expect(isValidQueryKeyValue(arr)).toBe(false);
    });

    it("allows valid nested structures", () => {
      const obj = { a: { b: { c: 1 } } };
      expect(isValidQueryKeyValue(obj)).toBe(true);
    });
  });
});
