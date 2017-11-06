"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("../src/Position");
describe("Position", () => {
    it("moves north", () => {
        const position = new Position_1.default(2, 2);
        const newPosition = new Position_1.default(2, 3);
        expect(position.moveNorth()).toEqual(newPosition);
    });
});
