"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    radius;
    constructor(rad) {
        this.radius = rad;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimiter() {
        return 2 * Math.PI * this.radius;
    }
    setRadius(rad) {
        this.radius = rad;
    }
}
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map