//import Statements
import express, { Express, Request, Response } from "express";
import { uptime } from "process";

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

app.get("/api/v1/health/live", (req: Request, res: Response) => {
    const healthlive: HealthResponse = {
        status: "LIVE",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };
    res.json(healthlive);
});
export default app;