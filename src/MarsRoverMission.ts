export default class MarsRoverMission {

  private instructions: string;

  constructor(instructions: string) {
    this.instructions = instructions;
  }

  public output(): string {
    return this.instructions.split("\n").slice(-1).pop() || "";
  }
}
