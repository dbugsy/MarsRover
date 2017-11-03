export default class Instructions {
  private input: string;

  constructor(input: string) {
    this.input = input;
  }

  public get gridSize() {
    return this.input.split("\n")[0] || "";
  }

  public get startingLocation() {
    return this.input.split("\n")[1] || "";
  }
}
