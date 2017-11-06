"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe("when there is no rover", () => {
    const mission = new MarsRoverMission();
    expect(mission.output()).toEqual("");
});
