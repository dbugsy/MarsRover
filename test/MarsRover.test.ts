import {} from "jest";
import Instructions from "../src/Instructions";
import MarsRoverMission from "../src/MarsRoverMission";

describe("when placing rovers", () => {

  it("gets no response from no rovers", () => {
    const mission = new MarsRoverMission(new Instructions(""));
    expect(mission.output()).toEqual("");
  });

  it("gets the position of a rover", () => {
    const startingPosition = "\n0 0 N";
    const newPosition = "0 0 N";
    const mission = new MarsRoverMission(new Instructions(startingPosition));
    expect(mission.output()).toEqual(newPosition);
  });

  it("moves the rover", () => {
    const startingPosition = "0 0 N";
    const instructions = startingPosition + "\nM";
    const newPosition = "0 1 N";
    const mission = new MarsRoverMission(new Instructions(instructions));
    expect(mission.output()).toEqual(newPosition);
  });

});
