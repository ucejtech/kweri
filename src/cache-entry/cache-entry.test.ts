import { describe, it, expect, beforeEach } from "bun:test";
import {
  createCacheEntry,
  isFresh,
  isErrorExpired,
  categorizeError,
  defaultCacheOptions,
  type CacheEntry,
  type CachedError,
} from "./";

describe("Cache Entry Model", () => {
  describe("createCacheEntry", () => {
    it("creates entry with default values", () => {
      const entry = createCacheEntry();

      expect(entry.data).toBeUndefined();
      expect(entry.status).toBe("idle");
      expect(entry.error).toBeUndefined();
      expect(entry.updatedAt).toBe(0);
      expect(entry.staleTime).toBe(defaultCacheOptions.staleTime);
      expect(entry.cacheTime).toBe(defaultCacheOptions.cacheTime);
      expect(entry.errorUpdatedAt).toBe(0);
      expect(entry.errorCacheTime).toBe(defaultCacheOptions.errorCacheTime);
      expect(entry.retryCount).toBe(0);
    });

    it("creates entry with initial data", () => {
      const data = { id: "123", name: "Test" };
      const entry = createCacheEntry({ data });

      expect(entry.data).toEqual(data);
      expect(entry.status).toBe("idle");
      expect(entry.updatedAt).toBeGreaterThan(0);
    });

    it("creates entry with custom status", () => {
      const entry = createCacheEntry({ status: "loading" });

      expect(entry.status).toBe("loading");
    });

    it("creates entry with error", () => {
      const error: CachedError = {
        message: "Not found",
        type: "validation",
        status: 404,
        retryable: false,
      };
      const entry = createCacheEntry({ error, status: "error" });

      expect(entry.error).toEqual(error);
      expect(entry.status).toBe("error");
      expect(entry.errorUpdatedAt).toBeGreaterThan(0);
    });

    it("allows custom timing options", () => {
      const entry = createCacheEntry({
        staleTime: 10_000,
        cacheTime: 30_000,
        errorCacheTime: 1_000,
      });

      expect(entry.staleTime).toBe(10_000);
      expect(entry.cacheTime).toBe(30_000);
      expect(entry.errorCacheTime).toBe(1_000);
    });
  });

  describe("isFresh", () => {
    it("returns false for entry with no data", () => {
      const entry = createCacheEntry();
      expect(isFresh(entry)).toBe(false);
    });

    it("returns true for fresh data within staleTime", () => {
      const now = Date.now();
      const entry = createCacheEntry({
        data: { test: true },
        staleTime: 60_000, // 1 minute
      });
      entry.updatedAt = now;

      expect(isFresh(entry, now)).toBe(true);
      expect(isFresh(entry, now + 30_000)).toBe(true); // 30 seconds later
    });

    it("returns false for stale data past staleTime", () => {
      const now = Date.now();
      const entry = createCacheEntry({
        data: { test: true },
        staleTime: 60_000, // 1 minute
      });
      entry.updatedAt = now;

      expect(isFresh(entry, now + 60_001)).toBe(false); // Just past staleTime
      expect(isFresh(entry, now + 120_000)).toBe(false); // 2 minutes later
    });

    it("returns false when staleTime is 0", () => {
      const now = Date.now();
      const entry = createCacheEntry({
        data: { test: true },
        staleTime: 0,
      });
      entry.updatedAt = now;

      expect(isFresh(entry, now)).toBe(false);
    });
  });

  describe("isErrorExpired", () => {
    it("returns true when no error exists", () => {
      const entry = createCacheEntry();
      expect(isErrorExpired(entry)).toBe(true);
    });

    it("returns false for recent error within errorCacheTime", () => {
      const now = Date.now();
      const error: CachedError = {
        message: "Error",
        type: "network",
        retryable: true,
      };
      const entry = createCacheEntry({
        error,
        errorCacheTime: 5_000, // 5 seconds
      });
      entry.errorUpdatedAt = now;

      expect(isErrorExpired(entry, now)).toBe(false);
      expect(isErrorExpired(entry, now + 2_000)).toBe(false); // 2 seconds later
    });

    it("returns true for expired error past errorCacheTime", () => {
      const now = Date.now();
      const error: CachedError = {
        message: "Error",
        type: "network",
        retryable: true,
      };
      const entry = createCacheEntry({
        error,
        errorCacheTime: 5_000, // 5 seconds
      });
      entry.errorUpdatedAt = now;

      expect(isErrorExpired(entry, now + 5_001)).toBe(true); // Just past expiry
      expect(isErrorExpired(entry, now + 10_000)).toBe(true); // 10 seconds later
    });
  });

  describe("categorizeError", () => {
    it("categorizes 4xx errors as validation errors", () => {
      const error = { status: 404, message: "Not found" };
      const categorized = categorizeError(error);

      expect(categorized.type).toBe("validation");
      expect(categorized.status).toBe(404);
      expect(categorized.retryable).toBe(false);
    });

    it("categorizes 5xx errors as server errors", () => {
      const error = { status: 500, message: "Internal server error" };
      const categorized = categorizeError(error);

      expect(categorized.type).toBe("server");
      expect(categorized.status).toBe(500);
      expect(categorized.retryable).toBe(true);
    });

    it("categorizes TypeError as network error", () => {
      const error = new TypeError("Network request failed");
      const categorized = categorizeError(error);

      expect(categorized.type).toBe("network");
      expect(categorized.retryable).toBe(true);
    });

    it("categorizes AbortError as network error", () => {
      const error = { name: "AbortError", message: "Request aborted" };
      const categorized = categorizeError(error);

      expect(categorized.type).toBe("network");
      expect(categorized.retryable).toBe(true);
    });

    it("categorizes unknown errors as unknown type", () => {
      const error = new Error("Something went wrong");
      const categorized = categorizeError(error);

      expect(categorized.type).toBe("unknown");
      expect(categorized.retryable).toBe(true);
    });

    it("handles non-Error objects", () => {
      const error = "String error";
      const categorized = categorizeError(error);

      expect(categorized.message).toBe("String error");
      expect(categorized.type).toBe("unknown");
    });

    it("extracts statusCode as status", () => {
      const error = { statusCode: 403, message: "Forbidden" };
      const categorized = categorizeError(error);

      expect(categorized.status).toBe(403);
      expect(categorized.type).toBe("validation");
    });
  });
});

