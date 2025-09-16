//Import statements
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

// Tests
// 1. Profit case
// 2. Lost case
// 3. No change case
describe("calculatePortfolioPerformance", () => {

  it("A profit case where current value > initialInvestment", () => {
    const result = calculatePortfolioPerformance(1000, 1500);

    expect(result.initialInvestment).toBe(1000);
    expect(result.currentValue).toBe(1500);
    expect(result.profitOrLoss).toBe(500);
    expect(result.percentageChange).toBeCloseTo(50);
    expect(result.performanceSummary).toMatch(/Gained/);
  });

  it("A loss case where current value < initialInvestment", () => {
    const result = calculatePortfolioPerformance(1000, 800);

    expect(result.initialInvestment).toBe(1000);
    expect(result.currentValue).toBe(800);
    expect(result.profitOrLoss).toBe(-200);
    expect(result.percentageChange).toBeCloseTo(-20);
    expect(result.performanceSummary).toMatch(/Lost/);
  });

  it("No change case where current value = initialInvestment", () => {
    const result = calculatePortfolioPerformance(1000, 1000);

    expect(result.initialInvestment).toBe(1000);
    expect(result.currentValue).toBe(1000);
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toMatch(/No change/);
  });
});