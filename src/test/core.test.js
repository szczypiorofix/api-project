import request from 'supertest'
import CoreApp from '../core/core';
import {describe, it} from "node:test";
// import expect from "expect";


describe("GET /", () => {
    it("Default GET - testing connection to Express server", async () => {
        const coreApp = CoreApp();
        coreApp.init();

        const res = await request(coreApp.app).get("/");
        expect(res.statusCode).toBe(200);

        expect(1).toBe(1);
    });
});

// describe("GET /", () => {
//     it("GET test - testing retrieving all data from MongoDB", async () => {
//         server.init();
//         await server.mongoDbConnect(mongoDbAddress);
//
//         // const res = await request( server.app ).get("/");
//         // expect( res.statusCode ).toBe( 200 );
//
//         // expect(1).toBe(1);
//     });
// });
