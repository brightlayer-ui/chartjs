import { ChartConfiguration } from "chart.js";
import Chart = require("chart.js");
export declare function createBarChartConfig(): ChartConfiguration;
export declare function createPieChartConfig(): ChartConfiguration;
export declare function createLineChartConfig(): ChartConfiguration;
export declare function createDonutChartConfig(): ChartConfiguration;
export declare function drawChart(config: ChartConfiguration, id: string): Chart;
