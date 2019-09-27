"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pxb_barchart_config_1 = require("./config/pxb-barchart-config");
var pxb_donut_config_1 = require("./config/pxb-donut-config");
var pxb_linechart_config_1 = require("./config/pxb-linechart-config");
var pxb_piechart_config_1 = require("./config/pxb-piechart-config");
var styles_1 = require("./util/styles");
var Chart = require("chart.js");
// @ts-ignore
var deepcopy = require("deepcopy");
/* This is a Utility wrapper around ChartJS that creates graph configurations with Eaton themes. */
function createBarChartConfig() {
    return deepcopy({
        type: 'bar',
        data: {
            labels: pxb_barchart_config_1.pxbBarChartLabels,
            datasets: pxb_barchart_config_1.pxbBarChartData,
        },
        options: pxb_barchart_config_1.pxbBarChartOptions
    });
}
exports.createBarChartConfig = createBarChartConfig;
function createPieChartConfig() {
    return deepcopy({
        type: 'pie',
        data: {
            labels: pxb_piechart_config_1.pxbPieChartLabels,
            datasets: pxb_piechart_config_1.pxbPieChartData
        },
        options: pxb_piechart_config_1.pxbPieChartOptions
    });
}
exports.createPieChartConfig = createPieChartConfig;
function createLineChartConfig() {
    return deepcopy({
        type: 'line',
        data: {
            labels: pxb_linechart_config_1.pxbLineChartLabels,
            datasets: pxb_linechart_config_1.pxbLineChartData
        },
        options: pxb_linechart_config_1.pxbLineChartOptions,
    });
}
exports.createLineChartConfig = createLineChartConfig;
function createDonutChartConfig() {
    return deepcopy({
        type: 'doughnut',
        data: {
            labels: pxb_donut_config_1.pxbDonutChartLabels,
            datasets: pxb_donut_config_1.pxbDonutChartData
        },
        options: pxb_donut_config_1.pxbDonutChartOptions,
    });
}
exports.createDonutChartConfig = createDonutChartConfig;
function drawChart(config, id) {
    Chart.defaults.global.defaultFontFamily = styles_1.OpenSans;
    var ctx = document.getElementById(id).getContext('2d');
    return new Chart(ctx, config);
}
exports.drawChart = drawChart;
