"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("./Command");
class MarsRoverMission {
    constructor(instructions) {
        this.instructions = instructions;
    }
    output() {
        if (this.instructions.startingLocation === "") {
            return "";
        }
        if (this.instructions.directions.slice(0, 2) === "" + Command_1.Command[Command_1.Command.R] + Command_1.Command[Command_1.Command.R]) {
            return this._moveSouth(this.instructions.directions.slice(2));
        }
        if (this.instructions.directions.slice(0, 1) === Command_1.Command[Command_1.Command.L]) {
            return this._moveWest(this.instructions.directions.slice(1));
        }
        if (this.instructions.directions.slice(0, 1) === Command_1.Command[Command_1.Command.R]) {
            return this._moveEast(this.instructions.directions.slice(1));
        }
        return this._moveNorth(this.instructions.directions);
    }
    _moveNorth(moves, count = 2) {
        if (moves === "") {
            return `2 ${count} N`;
        }
        return this._moveNorth(moves.slice(1), count + 1);
    }
    _moveEast(moves, count = 2) {
        if (moves === "") {
            return `${count} 2 E`;
        }
        return this._moveEast(moves.slice(1), count + 1);
    }
    _moveWest(moves, count = 2) {
        if (moves === "") {
            return `${count} 2 W`;
        }
        return this._moveEast(moves.slice(1), count - 1);
    }
    _moveSouth(moves, count = 2) {
        if (moves === "") {
            return `2 ${count} S`;
        }
        return this._moveSouth(moves.slice(1), count - 1);
    }
}
exports.default = MarsRoverMission;
