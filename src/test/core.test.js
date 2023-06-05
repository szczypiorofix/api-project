require("dotenv").config();
const request = require("supertest");
const ApiApplication = require("../core/core");
const server = require("../core/core");
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;
const mongoDbAddress = process.env.MONGODB_ADDRESS;

describe("GET /", () => {
    it("Default GET - testing connection to Express server", async () => {
        server.init();
        // await server.mongoDbConnect( mongoDbAddress );

        const res = await request(server.app).get("/");
        expect(res.statusCode).toBe(200);

        expect(1).toBe(1);
    });
});

describe("GET /", () => {
    it("GET test - testing retrieveing all data from MongoDB", async () => {
        server.init();
        await server.mongoDbConnect(mongoDbAddress);

        // const res = await request( server.app ).get("/");
        // expect( res.statusCode ).toBe( 200 );

        // expect(1).toBe(1);
    });
});
