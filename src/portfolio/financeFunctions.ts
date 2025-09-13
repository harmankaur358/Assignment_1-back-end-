interface Asset {
  name: string;
  value: number;
  type: string;
}

function findLargestHolding(assets: Asset[]): Asset | null {
  if (assets.length === 0) return null;
  
  let largest = assets[0];
  for (let i = 1; i < assets.length; i++) {
    if (assets[i].value > largest.value) {
      largest = assets[i];
    }
  }
  return largest;
}

function calculateAssetAllocation(assets: Asset[]): {[key: string]: number} {
  const result: {[key: string]: number} = {};
  
  // Calculate total value
  let total = 0;
  for (const asset of assets) {
    total += asset.value;
  }
  
  // Calculate percentages
  for (const asset of assets) {
    const percentage = (asset.value / total) * 100;
    result[asset.type] = Math.round(percentage * 100) / 100; 
  }
  
  return result;
}
