"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rover {
    constructor(geometry) {
        this.geometry = geometry;
    }
    location() {
        return this.geometry;
    }
}
exports.default = Rover;
