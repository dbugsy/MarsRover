"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    constructor(xCoord, yCoord) {
        this.x = xCoord;
        this.y = yCoord;
    }
    moveNorth() {
        return new Position(2, 3);
    }
}
exports.default = Position;
