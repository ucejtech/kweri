import { describe, it, expect, beforeEach, mock } from "bun:test";
import { FetchOrchestrator } from "./index.js";

describe("FetchOrchestrator", () => {
  let orchestrator: FetchOrchestrator;

  beforeEach(() => {
    orchestrator = new FetchOrchestrator();
  });

  describe("fetch", () => {
    it("executes the fetcher and returns result", async () => {
      const fetcher = mock(() => Promise.resolve({ id: 123 }));

      const result = await orchestrator.fetch("key1", fetcher);

      expect(result).toEqual({ id: 123 });
      expect(fetcher).toHaveBeenCalledTimes(1);
    });

    it("deduplicates concurrent requests for same key", async () => {
      const fetcher = mock(() => 
        new Promise((resolve) => setTimeout(() => resolve({ id: 123 }), 50))
      );

      const promise1 = orchestrator.fetch("key1", fetcher);
      const promise2 = orchestrator.fetch("key1", fetcher);
      const promise3 = orchestrator.fetch("key1", fetcher);

      const [result1, result2, result3] = await Promise.all([
        promise1,
        promise2,
        promise3,
      ]);

      expect(result1).toEqual({ id: 123 });
      expect(result2).toEqual({ id: 123 });
      expect(result3).toEqual({ id: 123 });
      expect(fetcher).toHaveBeenCalledTimes(1); // Only called once!
    });

    it("returns same promise instance for concurrent requests", async () => {
      const fetcher = mock(() => 
        new Promise((resolve) => setTimeout(() => resolve({ id: 123 }), 50))
      );

      const promise1 = orchestrator.fetch("key1", fetcher);
      const promise2 = orchestrator.fetch("key1", fetcher);

      // Both promises should resolve to same value
      const [result1, result2] = await Promise.all([promise1, promise2]);
      expect(result1).toEqual(result2);
      expect(fetcher).toHaveBeenCalledTimes(1);
    });

    it("allows different keys to execute independently", async () => {
      const fetcher1 = mock(() => Promise.resolve({ id: 1 }));
      const fetcher2 = mock(() => Promise.resolve({ id: 2 }));

      const [result1, result2] = await Promise.all([
        orchestrator.fetch("key1", fetcher1),
        orchestrator.fetch("key2", fetcher2),
      ]);

      expect(result1).toEqual({ id: 1 });
      expect(result2).toEqual({ id: 2 });
      expect(fetcher1).toHaveBeenCalledTimes(1);
      expect(fetcher2).toHaveBeenCalledTimes(1);
    });

    it("cleans up after request completes", async () => {
      const fetcher = mock(() => Promise.resolve({ id: 123 }));

      expect(orchestrator.isInFlight("key1")).toBe(false);

      const promise = orchestrator.fetch("key1", fetcher);
      expect(orchestrator.isInFlight("key1")).toBe(true);

      await promise;
      expect(orchestrator.isInFlight("key1")).toBe(false);
    });

    it("allows new request after previous completes", async () => {
      const fetcher1 = mock(() => Promise.resolve({ id: 1 }));
      const fetcher2 = mock(() => Promise.resolve({ id: 2 }));

      const result1 = await orchestrator.fetch("key1", fetcher1);
      const result2 = await orchestrator.fetch("key1", fetcher2);

      expect(result1).toEqual({ id: 1 });
      expect(result2).toEqual({ id: 2 });
      expect(fetcher1).toHaveBeenCalledTimes(1);
      expect(fetcher2).toHaveBeenCalledTimes(1);
    });

    it("handles errors and cleans up", async () => {
      const error = new Error("Fetch failed");
      const fetcher = mock(() => Promise.reject(error));

      expect(orchestrator.isInFlight("key1")).toBe(false);

      const promise = orchestrator.fetch("key1", fetcher);
      expect(orchestrator.isInFlight("key1")).toBe(true);

      await expect(promise).rejects.toThrow("Fetch failed");
      expect(orchestrator.isInFlight("key1")).toBe(false);
    });

    it("shares errors with all concurrent callers", async () => {
      const error = new Error("Fetch failed");
      const fetcher = mock(() => 
        new Promise((_, reject) => setTimeout(() => reject(error), 50))
      );

      const promise1 = orchestrator.fetch("key1", fetcher);
      const promise2 = orchestrator.fetch("key1", fetcher);
      const promise3 = orchestrator.fetch("key1", fetcher);

      // All promises should reject with same error
      const results = await Promise.allSettled([promise1, promise2, promise3]);
      
      expect(results[0].status).toBe("rejected");
      expect(results[1].status).toBe("rejected");
      expect(results[2].status).toBe("rejected");
      expect(fetcher).toHaveBeenCalledTimes(1);
    });

    it("allows retry after error", async () => {
      const error = new Error("First attempt failed");
      const fetcher1 = mock(() => Promise.reject(error));
      const fetcher2 = mock(() => Promise.resolve({ id: 123 }));

      await expect(orchestrator.fetch("key1", fetcher1)).rejects.toThrow();
      
      const result = await orchestrator.fetch("key1", fetcher2);
      expect(result).toEqual({ id: 123 });
    });
  });

  describe("isInFlight", () => {
    it("returns false for keys with no in-flight request", () => {
      expect(orchestrator.isInFlight("nonexistent")).toBe(false);
    });

    it("returns true during request", async () => {
      const fetcher = mock(() => 
        new Promise((resolve) => setTimeout(() => resolve({ id: 123 }), 50))
      );

      const promise = orchestrator.fetch("key1", fetcher);
      expect(orchestrator.isInFlight("key1")).toBe(true);

      await promise;
      expect(orchestrator.isInFlight("key1")).toBe(false);
    });

    it("returns false after request completes", async () => {
      const fetcher = mock(() => Promise.resolve({ id: 123 }));

      await orchestrator.fetch("key1", fetcher);
      expect(orchestrator.isInFlight("key1")).toBe(false);
    });
  });

  describe("size", () => {
    it("returns 0 when no requests in flight", () => {
      expect(orchestrator.size).toBe(0);
    });

    it("tracks number of in-flight requests", async () => {
      const fetcher = mock(() => 
        new Promise((resolve) => setTimeout(() => resolve({ id: 123 }), 100))
      );

      expect(orchestrator.size).toBe(0);

      const promise1 = orchestrator.fetch("key1", fetcher);
      expect(orchestrator.size).toBe(1);

      const promise2 = orchestrator.fetch("key2", fetcher);
      expect(orchestrator.size).toBe(2);

      await Promise.all([promise1, promise2]);
      expect(orchestrator.size).toBe(0);
    });

    it("does not count duplicate keys", async () => {
      const fetcher = mock(() => 
        new Promise((resolve) => setTimeout(() => resolve({ id: 123 }), 100))
      );

      const promise1 = orchestrator.fetch("key1", fetcher);
      const promise2 = orchestrator.fetch("key1", fetcher);
      const promise3 = orchestrator.fetch("key1", fetcher);

      expect(orchestrator.size).toBe(1); // Only 1 unique key

      await Promise.all([promise1, promise2, promise3]);
      expect(orchestrator.size).toBe(0);
    });
  });

  describe("clear", () => {
    it("removes all in-flight request tracking", async () => {
      const fetcher = mock(() => 
        new Promise((resolve) => setTimeout(() => resolve({ id: 123 }), 100))
      );

      orchestrator.fetch("key1", fetcher);
      orchestrator.fetch("key2", fetcher);

      expect(orchestrator.size).toBe(2);
      orchestrator.clear();
      expect(orchestrator.size).toBe(0);
    });
  });

  describe("race conditions", () => {
    it("handles rapid sequential requests", async () => {
      const fetcher = mock(() => Promise.resolve({ id: 123 }));

      const results = await Promise.all([
        orchestrator.fetch("key1", fetcher),
        orchestrator.fetch("key1", fetcher),
        orchestrator.fetch("key1", fetcher),
        orchestrator.fetch("key1", fetcher),
        orchestrator.fetch("key1", fetcher),
      ]);

      expect(results).toHaveLength(5);
      results.forEach((result) => expect(result).toEqual({ id: 123 }));
      expect(fetcher).toHaveBeenCalledTimes(1);
    });

    it("handles interleaved requests for different keys", async () => {
      const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      
      const fetcher1 = mock(async () => {
        await delay(30);
        return { id: 1 };
      });
      
      const fetcher2 = mock(async () => {
        await delay(20);
        return { id: 2 };
      });
      
      const fetcher3 = mock(async () => {
        await delay(10);
        return { id: 3 };
      });

      const [r1, r2, r3] = await Promise.all([
        orchestrator.fetch("key1", fetcher1),
        orchestrator.fetch("key2", fetcher2),
        orchestrator.fetch("key3", fetcher3),
      ]);

      expect(r1).toEqual({ id: 1 });
      expect(r2).toEqual({ id: 2 });
      expect(r3).toEqual({ id: 3 });
      expect(fetcher1).toHaveBeenCalledTimes(1);
      expect(fetcher2).toHaveBeenCalledTimes(1);
      expect(fetcher3).toHaveBeenCalledTimes(1);
    });
  });

  describe("memory management", () => {
    it("does not leak memory after many requests", async () => {
      const fetcher = mock(() => Promise.resolve({ id: 123 }));

      for (let i = 0; i < 1000; i++) {
        await orchestrator.fetch(`key${i}`, fetcher);
      }

      expect(orchestrator.size).toBe(0);
    });

    it("cleans up even when errors occur", async () => {
      const fetcher = mock(() => Promise.reject(new Error("Fail")));

      for (let i = 0; i < 100; i++) {
        try {
          await orchestrator.fetch(`key${i}`, fetcher);
        } catch {
          // Ignore errors
        }
      }

      expect(orchestrator.size).toBe(0);
    });
  });
});
