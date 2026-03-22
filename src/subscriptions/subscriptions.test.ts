import { describe, it, expect, beforeEach, mock } from "bun:test";
import { ObserverRegistry } from "./index.js";
import { createCacheEntry } from "../cache/index.js";

describe("ObserverRegistry", () => {
  let registry: ObserverRegistry;

  beforeEach(() => {
    registry = new ObserverRegistry();
  });

  describe("subscribe", () => {
    it("returns an unsubscribe function", () => {
      const callback = mock(() => {});
      const unsubscribe = registry.subscribe("key1", callback);

      expect(typeof unsubscribe).toBe("function");
    });

    it("allows multiple subscribers for the same key", () => {
      const callback1 = mock(() => {});
      const callback2 = mock(() => {});

      registry.subscribe("key1", callback1);
      registry.subscribe("key1", callback2);

      expect(registry.getObserverCount("key1")).toBe(2);
    });

    it("tracks subscribers for different keys independently", () => {
      const callback1 = mock(() => {});
      const callback2 = mock(() => {});

      registry.subscribe("key1", callback1);
      registry.subscribe("key2", callback2);

      expect(registry.getObserverCount("key1")).toBe(1);
      expect(registry.getObserverCount("key2")).toBe(1);
    });

    it("does not add duplicate callbacks", () => {
      const callback = mock(() => {});

      registry.subscribe("key1", callback);
      registry.subscribe("key1", callback);

      expect(registry.getObserverCount("key1")).toBe(1);
    });
  });

  describe("unsubscribe", () => {
    it("removes the subscriber", () => {
      const callback = mock(() => {});
      const unsubscribe = registry.subscribe("key1", callback);

      expect(registry.getObserverCount("key1")).toBe(1);
      unsubscribe();
      expect(registry.getObserverCount("key1")).toBe(0);
    });

    it("only removes the specific callback", () => {
      const callback1 = mock(() => {});
      const callback2 = mock(() => {});

      const unsubscribe1 = registry.subscribe("key1", callback1);
      registry.subscribe("key1", callback2);

      unsubscribe1();
      expect(registry.getObserverCount("key1")).toBe(1);
    });

    it("can be called multiple times safely", () => {
      const callback = mock(() => {});
      const unsubscribe = registry.subscribe("key1", callback);

      unsubscribe();
      unsubscribe();
      expect(registry.getObserverCount("key1")).toBe(0);
    });

    it("cleans up empty observer sets", () => {
      const callback = mock(() => {});
      const unsubscribe = registry.subscribe("key1", callback);

      expect(registry.size).toBe(1);
      unsubscribe();
      expect(registry.size).toBe(0);
    });
  });

  describe("notify", () => {
    it("calls all subscribers with the entry", () => {
      const callback1 = mock(() => {});
      const callback2 = mock(() => {});
      const entry = createCacheEntry({ data: { id: 123 } });

      registry.subscribe("key1", callback1);
      registry.subscribe("key1", callback2);

      registry.notify("key1", entry);

      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback1).toHaveBeenCalledWith(entry);
      expect(callback2).toHaveBeenCalledTimes(1);
      expect(callback2).toHaveBeenCalledWith(entry);
    });

    it("does nothing when no subscribers exist", () => {
      const entry = createCacheEntry({ data: { id: 123 } });

      // Should not throw
      registry.notify("nonexistent", entry);
    });

    it("does not call unsubscribed callbacks", () => {
      const callback1 = mock(() => {});
      const callback2 = mock(() => {});
      const entry = createCacheEntry({ data: { id: 123 } });

      const unsubscribe1 = registry.subscribe("key1", callback1);
      registry.subscribe("key1", callback2);

      unsubscribe1();
      registry.notify("key1", entry);

      expect(callback1).not.toHaveBeenCalled();
      expect(callback2).toHaveBeenCalledTimes(1);
    });

    it("isolates errors from failing callbacks", () => {
      const callback1 = mock(() => {
        throw new Error("Callback 1 failed");
      });
      const callback2 = mock(() => {});
      const entry = createCacheEntry({ data: { id: 123 } });

      registry.subscribe("key1", callback1);
      registry.subscribe("key1", callback2);

      // Should not throw despite callback1 failing
      registry.notify("key1", entry);

      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback2).toHaveBeenCalledTimes(1);
    });

    it("calls callbacks in order of subscription", () => {
      const order: number[] = [];
      const callback1 = mock(() => order.push(1));
      const callback2 = mock(() => order.push(2));
      const callback3 = mock(() => order.push(3));
      const entry = createCacheEntry();

      registry.subscribe("key1", callback1);
      registry.subscribe("key1", callback2);
      registry.subscribe("key1", callback3);

      registry.notify("key1", entry);

      expect(order).toEqual([1, 2, 3]);
    });

    it("handles subscription during notification", () => {
      const callback1 = mock(() => {
        // Subscribe a new callback during notification
        registry.subscribe("key1", callback3);
      });
      const callback2 = mock(() => {});
      const callback3 = mock(() => {});
      const entry = createCacheEntry();

      registry.subscribe("key1", callback1);
      registry.subscribe("key1", callback2);

      registry.notify("key1", entry);

      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback2).toHaveBeenCalledTimes(1);
      // callback3 should not be called during this notification
      expect(callback3).not.toHaveBeenCalled();
    });

    it("handles unsubscription during notification", () => {
      let unsubscribe2: (() => void) | undefined;
      const callback1 = mock(() => {
        // Unsubscribe callback2 during notification
        unsubscribe2?.();
      });
      const callback2 = mock(() => {});
      const entry = createCacheEntry();

      registry.subscribe("key1", callback1);
      unsubscribe2 = registry.subscribe("key1", callback2);

      registry.notify("key1", entry);

      // Both should be called since we copy the set before iteration
      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback2).toHaveBeenCalledTimes(1);
    });
  });

  describe("getObserverCount", () => {
    it("returns 0 for keys with no observers", () => {
      expect(registry.getObserverCount("nonexistent")).toBe(0);
    });

    it("returns the correct count", () => {
      const callback1 = mock(() => {});
      const callback2 = mock(() => {});
      const callback3 = mock(() => {});

      registry.subscribe("key1", callback1);
      registry.subscribe("key1", callback2);
      registry.subscribe("key1", callback3);

      expect(registry.getObserverCount("key1")).toBe(3);
    });

    it("updates after unsubscribe", () => {
      const callback1 = mock(() => {});
      const callback2 = mock(() => {});

      const unsubscribe1 = registry.subscribe("key1", callback1);
      registry.subscribe("key1", callback2);

      expect(registry.getObserverCount("key1")).toBe(2);
      unsubscribe1();
      expect(registry.getObserverCount("key1")).toBe(1);
    });
  });

  describe("size", () => {
    it("returns 0 when no keys are observed", () => {
      expect(registry.size).toBe(0);
    });

    it("returns the number of observed keys", () => {
      registry.subscribe("key1", mock(() => {}));
      registry.subscribe("key2", mock(() => {}));
      registry.subscribe("key3", mock(() => {}));

      expect(registry.size).toBe(3);
    });

    it("does not count duplicate keys", () => {
      registry.subscribe("key1", mock(() => {}));
      registry.subscribe("key1", mock(() => {}));

      expect(registry.size).toBe(1);
    });
  });

  describe("clear", () => {
    it("removes all observers for a specific key", () => {
      registry.subscribe("key1", mock(() => {}));
      registry.subscribe("key1", mock(() => {}));
      registry.subscribe("key2", mock(() => {}));

      registry.clear("key1");

      expect(registry.getObserverCount("key1")).toBe(0);
      expect(registry.getObserverCount("key2")).toBe(1);
      expect(registry.size).toBe(1);
    });

    it("does nothing for non-existent keys", () => {
      registry.clear("nonexistent");
      expect(registry.size).toBe(0);
    });
  });

  describe("clearAll", () => {
    it("removes all observers for all keys", () => {
      registry.subscribe("key1", mock(() => {}));
      registry.subscribe("key2", mock(() => {}));
      registry.subscribe("key3", mock(() => {}));

      expect(registry.size).toBe(3);
      registry.clearAll();
      expect(registry.size).toBe(0);
    });
  });

  describe("memory leak prevention", () => {
    it("does not leak memory after subscribe/unsubscribe cycles", () => {
      const callback = mock(() => {});

      for (let i = 0; i < 1000; i++) {
        const unsubscribe = registry.subscribe(`key${i}`, callback);
        unsubscribe();
      }

      expect(registry.size).toBe(0);
    });

    it("cleans up after all subscribers unsubscribe", () => {
      const unsubscribes = Array.from({ length: 10 }, (_, i) =>
        registry.subscribe("key1", mock(() => {}))
      );

      expect(registry.getObserverCount("key1")).toBe(10);
      expect(registry.size).toBe(1);

      unsubscribes.forEach((unsub) => unsub());

      expect(registry.getObserverCount("key1")).toBe(0);
      expect(registry.size).toBe(0);
    });
  });
});
