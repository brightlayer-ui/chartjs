"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("../util/styles");
exports.pxbPieChartOptions = {
    responsive: true,
    legend: {
        display: false
    }
};
exports.pxbPieChartLabels = [
    'Chrome', 'Internet Explorer',
    'Firefox', 'Edge', 'Safari', '' +
        'Sogou Explorer', 'Opera', 'QQ', 'Other'
];
exports.pxbPieChartData = [{
        data: [61.41, 11.84, 10.85, 4.67, 4.18, 1.64, 1.6, 1.2, 2.61],
        backgroundColor: styles_1.pxbColorWheel,
        borderWidth: 3,
        hoverBorderColor: styles_1.pxbColors.gray[50],
        hoverBorderWidth: 5
    }];
