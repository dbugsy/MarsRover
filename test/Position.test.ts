import {} from "jest";
import Position from "../src/Position";

describe("Position", () => {
  it("moves north", () => {
    const position = new Position(2, 2);
    const newPosition = new Position(2, 3);
    expect(position.moveNorth()).toEqual(newPosition);
  });
});
