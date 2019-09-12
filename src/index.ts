import {ChartConfiguration} from "chart.js";
import {pxbBarChartData, pxbBarChartLabels, pxbBarChartOptions} from './config/pxb-barchart-config';
import {pxbDonutChartData, pxbDonutChartLabels, pxbDonutChartOptions} from './config/pxb-donut-config';
import {pxbLineChartData, pxbLineChartLabels, pxbLineChartOptions} from './config/pxb-linechart-config';
import {pxbPieChartData, pxbPieChartLabels, pxbPieChartOptions} from './config/pxb-piechart-config';
import Chart = require("chart.js");

/* This is a Utility wrapper around ChartJS that creates graph configurations with Eaton themes. */
export class PxbChartJsUtils {

  static createBarChartConfig(): ChartConfiguration {
     return {
        type: 'bar',
        data: {
           labels: pxbBarChartLabels,
           datasets: pxbBarChartData,
        },
        options: pxbBarChartOptions
     };
  }

  static createPieChart(): ChartConfiguration {
     return {
        type: 'pie',
        data: {
           labels: pxbPieChartLabels,
           datasets: pxbPieChartData
        },
        options: pxbPieChartOptions
     };
  }

  static createLineChart(): ChartConfiguration {
     return {
        type: 'line',
        data: {
           labels: pxbLineChartLabels,
           datasets: pxbLineChartData
        },
        options: pxbLineChartOptions,
     };
  }

  static createDonutChartConfig(): ChartConfiguration {
     return {
        type: 'doughnut',
        data: {
           labels: pxbDonutChartLabels,
           datasets: pxbDonutChartData
        },
        options: pxbDonutChartOptions,
     };
  }

  static drawChart(config: any, id: string): Chart {
     const ctx = (document.getElementById(id) as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
     return new Chart(ctx, config);
  }
}
