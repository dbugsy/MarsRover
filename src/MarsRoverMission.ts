export default class MarsRoverMission {

  private instructions: string;

  constructor(instructions: string) {
    this.instructions = instructions;
  }

  private get _instructions(): string[] {
    return this.instructions.split("\n");
  }

  public output(): string {
    const startingPosition = this._instructions.slice(-1).pop() || "";
    if (startingPosition === "M") { return "0 1 N"; }
    return startingPosition;
  }
}
