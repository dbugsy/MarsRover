"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instructions {
    constructor(input) {
        this.input = input;
    }
    get gridSize() {
        return this.input.split("\n")[0] || "";
    }
    get startingLocation() {
        return this.input.split("\n")[1] || "";
    }
    get directions() {
        return this.input.split("\n")[2] || "";
    }
}
exports.default = Instructions;
