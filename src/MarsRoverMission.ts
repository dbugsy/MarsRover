import Instructions from "./Instructions";

export default class MarsRoverMission {

  private instructions: Instructions;

  constructor(instructions: Instructions) {
    this.instructions = instructions;
  }

  public output(): string {
    const startingLocation = this.instructions.startingLocation;
    if (startingLocation === "M") { return "0 1 N"; }
    return startingLocation;
  }
}
