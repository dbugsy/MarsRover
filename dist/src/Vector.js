"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cardinal_1 = require("./Cardinal");
class Vector {
    constructor(vector) {
        this.location = [Number.parseInt(vector.charAt(0)), Number.parseInt(vector.charAt(1))];
        this.direction = Cardinal_1.Cardinal[Cardinal_1.Cardinal[vector.charAt(4)]];
    }
    toString() {
        return `${this.Xcoord} ${this.Ycoord} ${Cardinal_1.Cardinal[this.direction]}`;
    }
    move() {
        this.location[1] = this.Ycoord + 1;
    }
    get Xcoord() {
        return this.location[0];
    }
    get Ycoord() {
        return this.location[1];
    }
}
exports.default = Vector;
