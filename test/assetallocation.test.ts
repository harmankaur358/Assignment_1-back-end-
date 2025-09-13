import {findLargestHolding, calculateAssetAllocation, Asset } from "../src/portfolio/financeFunctions";

describe("calculateAssetAllocation", () => {

  it("calculates allocation for even distribution", () => {
    const assets: Asset[] = [
      { name: "Stock A", value: 100, type: "Stock" },
      { name: "Bond B", value: 100, type: "Bond" },
      { name: "Real Estate C", value: 100, type: "Real Estate" },
    ];
    expect(calculateAssetAllocation(assets)).toEqual({
      Stock: 33,
      Bond: 33,
      "Real Estate": 33, 
    });
  });

  it("calculates allocation for uneven distribution", () => {
    const assets: Asset[] = [
      { name: "Stock A", value: 500, type: "Stock" },
      { name: "Bond B", value: 300, type: "Bond" },
      { name: "Real Estate C", value: 200, type: "Real Estate" },
    ];
    expect(calculateAssetAllocation(assets)).toEqual({
      Stock: 50,        
      Bond: 30,         
      "Real Estate": 20 
    });
  });

  it("returns empty object for empty array", () => {
    expect(calculateAssetAllocation([])).toEqual({});
  });

});
