const supertest = require('supertest');
const app = require('../index');

describe("Testing the app", () => {

    beforeEach(() => {
        jest.setTimeout(10000);
    });

    it("tests our testing framework if it works", () => {
        expect(2).toBe(2);
    });

    it("tests the get default api", async () => {
        const response = await supertest(app).get(`/api`);
        expect(response.body.data.length).toBe(10);
    });

    it("tests the get pivot api", async () => {
        const response = await supertest(app).get(`/apivot`);
        expect(response.body.data.length).toBe(6);
    });

});
