require("dotenv").config();
const request = require("supertest");
const ApiApplication = require('../core/core')


describe("GET /", () => {
    it("Default GET request test", async () => {
        const res = await request( ApiApplication.app ).get("/");
        expect(res.statusCode).toBe(200);
    });
});
