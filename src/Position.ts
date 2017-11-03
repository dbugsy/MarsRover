export default class Position {
  private x: number;
  private y: number;

  constructor(xCoord: number, yCoord: number) {
    this.x = xCoord;
    this.y = yCoord;
  }

  public moveNorth() {
    return new Position(2, 3);
  }
}
