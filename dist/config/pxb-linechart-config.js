"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("../util/styles");
var utilities_1 = require("../util/utilities");
exports.pxbLineChartLabels = ['Jan', 'Feb', 'Marc', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
exports.pxbLineChartData = [
    {
        data: utilities_1.getRandomData(100, false, 12),
        label: 'Device 1',
        fill: false,
        borderColor: styles_1.pxbColors.blue[900],
        backgroundColor: styles_1.pxbColors.blue[900],
    },
    {
        data: utilities_1.getRandomData(20, false, 12),
        label: 'Device 2',
        fill: false,
        borderColor: styles_1.pxbColors.blue[200],
        backgroundColor: styles_1.pxbColors.blue[200]
    },
    {
        data: utilities_1.getRandomData(20, false, 12),
        label: 'Device 3',
        fill: false,
        borderColor: styles_1.pxbColors.blue[200],
        backgroundColor: styles_1.pxbColors.blue[200]
    }
];
exports.pxbLineChartOptions = {
    elements: {
        line: {
            tension: 0
        }
    },
    responsive: true,
    tooltips: {
        enabled: true
    },
    legend: {
        position: 'bottom',
        labels: {
            boxWidth: 12,
            fontFamily: styles_1.OpenSans
        }
    },
    scales: {
        xAxes: [
            {
                ticks: {
                    fontFamily: styles_1.OpenSans
                },
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Last 20 Seconds'
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    fontFamily: styles_1.OpenSans
                },
                barThickness: 20
            }
        ]
    }
};
