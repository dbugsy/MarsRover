import {Command} from "./Command";
import Instructions from "./Instructions";

export default class MarsRoverMission {

  private instructions: Instructions;

  constructor(instructions: Instructions) {
    this.instructions = instructions;
  }

  public output(): string {
    if (this.instructions.startingLocation === "") { return ""; }
    if (this.instructions.directions.slice(0, 2) === "" + Command[Command.R] + Command[Command.R]) {
      return this._moveSouth(this.instructions.directions.slice(2));
    }
    if (this.instructions.directions.slice(0, 1) === Command[Command.L]) {
      return this._moveWest(this.instructions.directions.slice(1));
    }
    if (this.instructions.directions.slice(0, 1) === Command[Command.R]) {
      return this._moveEast(this.instructions.directions.slice(1));
    }
    return this._moveNorth(this.instructions.directions);
  }

  private _moveNorth(moves: string, count: number = 2): string {
    if (moves === "") {return `2 ${count} N`; }
    return this._moveNorth(moves.slice(1), count + 1);
  }

  private _moveEast(moves: string, count: number = 2): string {
    if (moves === "") {return `${count} 2 E`; }
    return this._moveEast(moves.slice(1), count + 1);
  }

  private _moveWest(moves: string, count: number = 2): string {
    if (moves === "") {return `${count} 2 W`; }
    return this._moveEast(moves.slice(1), count - 1);
  }

  private _moveSouth(moves: string, count: number = 2): string {
    if (moves === "") {return `2 ${count} S`; }
    return this._moveSouth(moves.slice(1), count - 1);
  }
}
