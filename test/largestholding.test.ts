import {findLargestHolding, calculateAssetAllocation, Asset } from "../src/portfolio/financeFunctions";

describe("findLargestHolding", () => {
  it("returns the asset with the highest value", () => {
    const assets: Asset[] = [
      { name: "Stock A", value: 500, type: "Stock" },
      { name: "Bond B", value: 300, type: "Bond" },
      { name: "Stock C", value: 700, type: "Stock" },
    ];
    const largest = findLargestHolding(assets);
    expect(largest).toEqual({ name: "Stock C", value: 700, type: "Stock" });
  });

  it("returns null for an empty array", () => {
    expect(findLargestHolding([])).toBeNull();
  });

  it("returns the first asset if there is a tie", () => {
    const assets: Asset[] = [
      { name: "Stock A", value: 500, type: "Stock" },
      { name: "Bond B", value: 500, type: "Bond" },
    ];
    const largest = findLargestHolding(assets);
    expect(largest).toEqual({ name: "Stock A", value: 500, type: "Stock" });
  });
});