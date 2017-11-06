"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rover_1 = require("../src/Rover");
describe("Rover module", () => {
    it("reports it's location", () => {
        const geometry = new Geometry;
        const rover = new Rover_1.default(geometry);
        expect(rover.location).toEqual(geometry);
    });
});
;
