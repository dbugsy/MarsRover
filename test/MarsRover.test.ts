import {} from "jest";
import Instructions from "../src/Instructions";
import MarsRoverMission from "../src/MarsRoverMission";

describe("when placing rovers", () => {
  const startingPosition = "5 5\n2 2 N";

  it("gets no response from no rovers", () => {
    const mission = new MarsRoverMission(new Instructions(""));
    expect(mission.output()).toEqual("");
  });

  it("gets the position of a rover", () => {
    const newPosition = "2 2 N";

    const mission = new MarsRoverMission(new Instructions(startingPosition));

    expect(mission.output()).toEqual(newPosition);
  });

  describe("with a single placed rover", () => {
    it("moves the rover", () => {
      const instructions = startingPosition + "\nM";
      const newPosition = "2 3 N";

      const mission = new MarsRoverMission(new Instructions(instructions));

      expect(mission.output()).toEqual(newPosition);
    });

    it("moves the rover twice", () => {
      const instructions = startingPosition + "\nMM";
      const newPosition = "2 4 N";

      const mission = new MarsRoverMission(new Instructions(instructions));

      expect(mission.output()).toEqual(newPosition);
    });

    it("moves the rover three times", () => {
      const instructions = startingPosition + "\nMMM";
      const newPosition = "2 5 N";
      const mission = new MarsRoverMission(new Instructions(instructions));

      expect(mission.output()).toEqual(newPosition);
    });

    it("turns right and moves the rover east", () => {
      const instructions = startingPosition + "\nRM";
      const newPosition = "3 2 E";
      const mission = new MarsRoverMission(new Instructions(instructions));

      expect(mission.output()).toEqual(newPosition);
    });

    it("turns left and moves the rover west", () => {
      const instructions = startingPosition + "\nLM";
      const newPosition = "1 2 E";
      const mission = new MarsRoverMission(new Instructions(instructions));

      expect(mission.output()).toEqual(newPosition);
    });

    it("turns right then right and moves the rover south", () => {
      const instructions = startingPosition + "\nRRM";
      const newPosition = "2 1 S";
      const mission = new MarsRoverMission(new Instructions(instructions));

      expect(mission.output()).toEqual(newPosition);
    });
  });

});
