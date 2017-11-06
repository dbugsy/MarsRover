"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector_1 = require("../src/Vector");
describe("Vector", () => {
    it("returns a string", () => {
        const vector = new Vector_1.default("0 0 N");
        const expectedString = "0 0 N";
        expect(vector.toString()).toBe(expectedString);
    });
    it("north facing vector moves by increasing y coordinate", () => {
        const vector = new Vector_1.default("0 0 N");
        const expectedString = "0 1 N";
        vector.move();
        expect(vector.toString()).toBe(expectedString);
    });
});
