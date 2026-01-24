import { describe, it, expect, beforeEach } from "bun:test";
import { CacheStore } from "./cache-store";
import { createCacheEntry, type CacheEntry, type CachedError } from "./cache-entry";

describe("CacheStore", () => {
  let store: CacheStore;

  beforeEach(() => {
    store = new CacheStore();
  });

  describe("get", () => {
    it("returns undefined for non-existent key", () => {
      expect(store.get("nonexistent")).toBeUndefined();
    });

    it("returns entry after it has been set", () => {
      const entry = createCacheEntry({ data: { id: 123 } });
      store.set("key1", entry);

      expect(store.get("key1")).toEqual(entry);
    });
  });

  describe("set", () => {
    it("creates new entry with defaults when key does not exist", () => {
      store.set("key1", { status: "loading" });

      const entry = store.get("key1");
      expect(entry).toBeDefined();
      expect(entry?.status).toBe("loading");
      expect(entry?.data).toBeUndefined();
      expect(entry?.error).toBeUndefined();
      expect(entry?.updatedAt).toBe(0);
    });

    it("merges partial update into existing entry", () => {
      store.set("key1", { status: "loading" });
      store.set("key1", { data: { id: 123 }, status: "success" });

      const entry = store.get("key1");
      expect(entry?.data).toEqual({ id: 123 });
      expect(entry?.status).toBe("success");
      expect(entry?.error).toBeUndefined(); // Preserved from original
    });

    it("updates individual fields without overwriting others", () => {
      const now = Date.now();
      store.set("key1", {
        data: { value: "original" },
        status: "success",
        updatedAt: now,
      });

      // Update only status
      store.set("key1", { status: "loading" });

      const entry = store.get("key1");
      expect(entry?.data).toEqual({ value: "original" }); // Preserved
      expect(entry?.status).toBe("loading"); // Updated
      expect(entry?.updatedAt).toBe(now); // Preserved
    });

    it("handles error updates", () => {
      store.set("key1", { status: "loading" });

      const error: CachedError = {
        message: "Not found",
        type: "validation",
        status: 404,
        retryable: false,
      };
      store.set("key1", { status: "error", error });

      const entry = store.get("key1");
      expect(entry?.status).toBe("error");
      expect(entry?.error).toEqual(error);
    });

    it("clears error when updating to success", () => {
      const error: CachedError = {
        message: "Error",
        type: "network",
        retryable: true,
      };
      store.set("key1", { status: "error", error });
      store.set("key1", { status: "success", data: { id: 123 }, error: undefined });

      const entry = store.get("key1");
      expect(entry?.status).toBe("success");
      expect(entry?.error).toBeUndefined();
    });

    it("updates timing fields", () => {
      const now = Date.now();
      store.set("key1", { status: "loading" });
      store.set("key1", {
        status: "success",
        data: { id: 123 },
        updatedAt: now,
      });

      const entry = store.get("key1");
      expect(entry?.updatedAt).toBe(now);
    });

    it("allows custom staleTime and cacheTime", () => {
      store.set("key1", {
        data: { id: 123 },
        staleTime: 60_000,
        cacheTime: 300_000,
      });

      const entry = store.get("key1");
      expect(entry?.staleTime).toBe(60_000);
      expect(entry?.cacheTime).toBe(300_000);
    });
  });

  describe("delete", () => {
    it("removes entry and returns true", () => {
      store.set("key1", { data: { id: 123 } });
      expect(store.has("key1")).toBe(true);

      const result = store.delete("key1");
      expect(result).toBe(true);
      expect(store.has("key1")).toBe(false);
    });

    it("returns false for non-existent key", () => {
      const result = store.delete("nonexistent");
      expect(result).toBe(false);
    });
  });

  describe("has", () => {
    it("returns false for non-existent key", () => {
      expect(store.has("nonexistent")).toBe(false);
    });

    it("returns true for existing key", () => {
      store.set("key1", { data: { id: 123 } });
      expect(store.has("key1")).toBe(true);
    });

    it("returns false after deletion", () => {
      store.set("key1", { data: { id: 123 } });
      store.delete("key1");
      expect(store.has("key1")).toBe(false);
    });
  });

  describe("entries", () => {
    it("returns empty iterator for empty cache", () => {
      const entries = Array.from(store.entries());
      expect(entries).toHaveLength(0);
    });

    it("returns all key-entry pairs", () => {
      store.set("key1", { data: { id: 1 } });
      store.set("key2", { data: { id: 2 } });
      store.set("key3", { data: { id: 3 } });

      const entries = Array.from(store.entries());
      expect(entries).toHaveLength(3);

      const keys = entries.map(([key]) => key);
      expect(keys).toContain("key1");
      expect(keys).toContain("key2");
      expect(keys).toContain("key3");
    });

    it("can be used to iterate and modify entries", () => {
      store.set("GET:/users:{}",  { data: { users: [] } });
      store.set("GET:/posts:{}",  { data: { posts: [] } });
      store.set("POST:/users:{}",  { data: { created: true } });

      // Invalidate all GET requests
      for (const [key, entry] of store.entries()) {
        if (key.startsWith("GET:")) {
          store.set(key, { updatedAt: 0 }); // Mark stale
        }
      }

      expect(store.get("GET:/users:{}")?.updatedAt).toBe(0);
      expect(store.get("GET:/posts:{}")?.updatedAt).toBe(0);
      expect(store.get("POST:/users:{}")?.updatedAt).not.toBe(0);
    });
  });

  describe("keys", () => {
    it("returns all keys", () => {
      store.set("key1", { data: { id: 1 } });
      store.set("key2", { data: { id: 2 } });

      const keys = Array.from(store.keys());
      expect(keys).toHaveLength(2);
      expect(keys).toContain("key1");
      expect(keys).toContain("key2");
    });
  });

  describe("values", () => {
    it("returns all entries", () => {
      store.set("key1", { data: { id: 1 } });
      store.set("key2", { data: { id: 2 } });

      const values = Array.from(store.values());
      expect(values).toHaveLength(2);
      expect(values[0]).toHaveProperty("data");
      expect(values[0]).toHaveProperty("status");
    });
  });

  describe("size", () => {
    it("returns 0 for empty cache", () => {
      expect(store.size).toBe(0);
    });

    it("returns correct count after additions", () => {
      store.set("key1", { data: { id: 1 } });
      expect(store.size).toBe(1);

      store.set("key2", { data: { id: 2 } });
      expect(store.size).toBe(2);
    });

    it("decrements after deletion", () => {
      store.set("key1", { data: { id: 1 } });
      store.set("key2", { data: { id: 2 } });
      expect(store.size).toBe(2);

      store.delete("key1");
      expect(store.size).toBe(1);
    });
  });

  describe("clear", () => {
    it("removes all entries", () => {
      store.set("key1", { data: { id: 1 } });
      store.set("key2", { data: { id: 2 } });
      store.set("key3", { data: { id: 3 } });

      expect(store.size).toBe(3);
      store.clear();
      expect(store.size).toBe(0);
      expect(store.has("key1")).toBe(false);
      expect(store.has("key2")).toBe(false);
      expect(store.has("key3")).toBe(false);
    });
  });

  describe("concurrent updates", () => {
    it("handles rapid updates to same key", () => {
      store.set("key1", { status: "idle" });
      store.set("key1", { status: "loading" });
      store.set("key1", { data: { id: 123 } });
      store.set("key1", { status: "success", updatedAt: Date.now() });

      const entry = store.get("key1");
      expect(entry?.status).toBe("success");
      expect(entry?.data).toEqual({ id: 123 });
      expect(entry?.updatedAt).toBeGreaterThan(0);
    });

    it("preserves data through status transitions", () => {
      const data = { id: 123, name: "Test" };
      
      store.set("key1", { data, status: "success", updatedAt: Date.now() });
      
      // Trigger refetch (status changes but data preserved)
      store.set("key1", { status: "loading" });
      
      const entry = store.get("key1");
      expect(entry?.status).toBe("loading");
      expect(entry?.data).toEqual(data); // Still available during refetch
    });
  });

  describe("integration with createCacheEntry", () => {
    it("uses default options when creating new entries", () => {
      store.set("key1", {});

      const entry = store.get("key1");
      expect(entry?.status).toBe("idle");
      expect(entry?.staleTime).toBe(0);
      expect(entry?.cacheTime).toBe(5 * 60_000);
      expect(entry?.errorCacheTime).toBe(5_000);
      expect(entry?.retryCount).toBe(0);
    });

    it("respects custom options when creating new entries", () => {
      store.set("key1", {
        staleTime: 30_000,
        cacheTime: 120_000,
        errorCacheTime: 10_000,
      });

      const entry = store.get("key1");
      expect(entry?.staleTime).toBe(30_000);
      expect(entry?.cacheTime).toBe(120_000);
      expect(entry?.errorCacheTime).toBe(10_000);
    });
  });
});
