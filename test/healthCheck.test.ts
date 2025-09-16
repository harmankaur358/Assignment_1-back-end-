//Import statements
import request, { Response } from "supertest";
import app from "../src/app";

describe("GET /api/v1/health", () => {
    it("health status should be 200", async () => {
        const response: Response = await request(app).get("/api/v1/health");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
    });
    it("Positive uptime value", async() => {
        const response: Response = await request(app).get("/api/v1/health");
        expect(response.body.uptime).toBeGreaterThan(0);
    });
    it("Should have valid timestamp", async() => {
        const response: Response = await request(app).get("/api/v1/health");
        expect(response.body).toHaveProperty("timestamp");
    });

});

describe("GET /api/v1/health/live", () => {
    it("Return LIVE status", async () => {
        const response: Response = await request(app).get("/api/v1/health/live");
        expect(response.body.status).toBe("LIVE");
    });
});