require("dotenv").config();
const request = require("supertest");
const expressApp = require('../core/server')


describe("GET /", () => {
    it("Default GET request test", async () => {
        const res = await request( expressApp ).get("/");
        expect(res.statusCode).toBe(200);
    });
});
