//Asset interface
export interface Asset {
  name: string;
  value: number;
  type: string;
}

// Function for finding the asset with the highest value
export function findLargestHolding(assets: Asset[]): Asset | null {
  if (!assets.length) return null;
  let largest = assets[0];
  for (const asset of assets) {
    if (asset.value > largest.value) largest = asset;
  }
  return largest;
}

// Function for calculating percentage allocation for each assest
export function calculateAssetAllocation(assets: Asset[]): {[type: string]: number} {
  const totals: {[type: string]: number} = {};
  let totalValue = 0;

  for (const asset of assets) {
    totalValue += asset.value;
    totals[asset.type] = (totals[asset.type] || 0) + asset.value;
  }

  const allocation: {[type: string]: number} = {};
  for (const type in totals) {
    allocation[type] = Math.round((totals[type] / totalValue) * 100);
  }

  return allocation;
}
