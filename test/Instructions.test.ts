import {} from "jest";
import Instructions from "../src/Instructions";

describe("Instructions", () => {

  it("has a grid size", () => {
    const expectedGridSize = "5 5";
    const gridSizeInput = expectedGridSize + "\n";
    const startingLocation = "0 0 N\n";
    const directions = "MMLM\n";
    const inputString = gridSizeInput + startingLocation + directions;

    const instructions = new Instructions(inputString);
    expect(instructions.gridSize).toBe(expectedGridSize);
  });

  it("has a starting location", () => {
    const expectedStartingLocation = "0 0 N";
    const gridSizeInput = "5 5\n";
    const startingLocation = expectedStartingLocation + "\n";
    const directions = "MMLM\n";
    const inputString = gridSizeInput + startingLocation + directions;

    const instructions = new Instructions(inputString);
    expect(instructions.startingLocation).toBe(expectedStartingLocation);
  });
});
