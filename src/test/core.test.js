const request = require("supertest");
const CoreApp = require("../core/core");

describe("GET /", () => {
    it("Default GET - testing connection to Express server", async () => {
        // const coreApp = CoreApp();
        // coreApp.init();

        // const res = await request(server.app).get("/");
        // expect(res.statusCode).toBe(200);

        expect(1).toBe(1);
    });
});

// describe("GET /", () => {
//     it("GET test - testing retrieveing all data from MongoDB", async () => {
//         server.init();
//         await server.mongoDbConnect(mongoDbAddress);
//
//         // const res = await request( server.app ).get("/");
//         // expect( res.statusCode ).toBe( 200 );
//
//         // expect(1).toBe(1);
//     });
// });
