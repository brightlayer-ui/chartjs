"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("../util/styles");
exports.pxbDonutChartOptions = {
    cutoutPercentage: 75,
    responsive: true,
    legend: {
        display: false
    }
};
exports.pxbDonutChartLabels = ['Device 1', 'Device 2', 'Device 3'];
exports.pxbDonutChartData = [
    {
        data: [10.85, 11.84, 61.41],
        backgroundColor: styles_1.pxbColorWheel,
        borderWidth: 5,
        hoverBorderWidth: 5,
        hoverBorderColor: styles_1.pxbColors.gray[50],
    },
];
