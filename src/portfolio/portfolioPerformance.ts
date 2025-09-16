// Created the interface for portfolioPerformance Calculation
export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

// calculatePortfolioPerformance function
export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number): PortfolioPerformance{

    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange =
    initialInvestment === 0? 0: (profitOrLoss / initialInvestment) * 100;

    switch (true) {
    case percentageChange > 20:
      return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary: `Gained significantly with a profit of $${Math.abs(profitOrLoss).toFixed(2)}.`,
      };

    case percentageChange > 10:
      return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary: `Gained moderately with a profit of $${Math.abs(profitOrLoss).toFixed(2)}.`,
      };

    case percentageChange > 0.1:
      return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary: `Gained slightly with a profit of $${Math.abs(profitOrLoss).toFixed(2)}.`,
      };

    case percentageChange === 0:
      return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary: "No change in portfolio value.",
      };

    case percentageChange >= -10:
      return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary: `Lost slightly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`,
      };

    case percentageChange >= -20:
      return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary: `Lost moderately with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`,
      };

    default:
        return {
            initialInvestment,
            currentValue,
            profitOrLoss,
            percentageChange,
            performanceSummary: `Lost significantly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`,
        };
}
}
