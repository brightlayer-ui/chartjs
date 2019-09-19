"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generate an array of random data
function getRandomData(scale, balanced, count) {
    if (balanced === void 0) { balanced = true; }
    if (count === void 0) { count = 20; }
    var data = [];
    for (var i = 0; i < count; i++) {
        data.push(Number(((Math.random() - (balanced ? 0.5 : 0)) * scale).toFixed(1)));
    }
    return data;
}
exports.getRandomData = getRandomData;
