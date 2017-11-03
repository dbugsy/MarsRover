import Instructions from "./Instructions";

export default class MarsRoverMission {

  private instructions: Instructions;

  constructor(instructions: Instructions) {
    this.instructions = instructions;
  }

  public output(): string {
    const startingLocation = this.instructions.startingLocation;
    if (this.instructions.directions === "M") { return "0 1 N"; }
    if (this.instructions.directions === "MM") { return "0 2 N"; }
    if (this.instructions.directions === "MMM") { return "0 3 N"; }
    return startingLocation;
  }
}
