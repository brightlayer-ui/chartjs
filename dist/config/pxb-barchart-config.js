"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("../util/styles");
var utilities_1 = require("../util/utilities");
exports.pxbBarChartLabels = ['Jan', 'Feb', 'Marc', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
exports.pxbBarChartData = createBarChartData(3, 12);
exports.pxbBarChartOptions = {
    responsive: true,
    legend: {
        position: 'bottom',
        labels: {
            usePointStyle: true,
            fontFamily: styles_1.OpenSans
        }
    },
    scales: {
        xAxes: [
            {
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Last 12 Months'
                },
                ticks: {
                    fontFamily: styles_1.OpenSans
                }
            }
        ],
        yAxes: [
            {
                barThickness: 50,
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Energy (kWh)'
                },
                ticks: {
                    fontFamily: styles_1.OpenSans
                }
            }
        ]
    }
};
function createBarChartData(dataSets, points) {
    var data = [];
    for (var i = 0; i < dataSets; i++) {
        data.push({
            data: utilities_1.getRandomData(100, false, points),
            label: 'Device ' + (1 + i),
            backgroundColor: styles_1.pxbColorWheel[i],
        });
    }
    return data;
}
