import {} from "jest";
import MarsRoverMission from "../src/MarsRoverMission";

describe("when placing rovers", () => {

  it("gets no response from no rovers", () => {
    const mission = new MarsRoverMission("");
    expect(mission.output()).toEqual("");
  });

  it("gets the position of a rover", () => {
    const startingPosition = "\n0 0 N";
    const newPosition = "0 0 N";
    const mission = new MarsRoverMission(startingPosition);
    expect(mission.output()).toEqual(newPosition);
  });
});
