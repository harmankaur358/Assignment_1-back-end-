//import Statements
import express, { Express, Request, Response } from "express";
import { uptime } from "process";
import {findLargestHolding, calculateAssetAllocation, Asset } from "../src/portfolio/financeFunctions";
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

// Initialized Express application
const app: Express = express();

// Defined a route
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

// Created the interface
interface HealthResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

// Health check endpoints
app.get("/api/v1/health", (req: Request, res: Response) => {
    const health: HealthResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };
    res.json(health);
});

// health live endpoint
app.get("/api/v1/health/live", (req: Request, res: Response) => {
    const healthlive: HealthResponse = {
        status: "LIVE",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };
    res.json(healthlive);
});

// performance endpoint
app.get("/api/v1/portfolio/performance", (req, res) => {
  const initialInvestment = Number(req.query.initialInvestment);
  const currentValue = Number(req.query.currentValue);
 
  if (isNaN(initialInvestment) || isNaN(currentValue)) {
    return res.status(400).json({ error: "Provide valid values" });
  }
 
  const result = calculatePortfolioPerformance(initialInvestment, currentValue);
  res.json(result);
});
 

// Largest Holding endpoint
app.get("/api/v1/portfolio/largest-holding", (_req, res) => {
  const assets: Asset[] = [
   { name: "Stock A", value: 500, type: "Stock" },
    { name: "Bond B", value: 300, type: "Bond" },
    { name: "Stock C", value: 700, type: "Stock" },
  ];
  res.json(findLargestHolding(assets));
});

// Asset Allocation endpoint
app.get("/api/v1/portfolio/allocation", (_req, res) => {
  const assets: Asset[] = [
    { name: "Stock A", value: 100, type: "Stock" },
    { name: "Bond B", value: 100, type: "Bond" },
    { name: "Real Estate C", value: 100, type: "Real Estate" }
  ];
  res.json(calculateAssetAllocation(assets));
});

export default app;