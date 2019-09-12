import {ChartDataSets, ChartOptions} from "chart.js";
import {pxbColors, pxbColorWheel} from '../util/styles';

export const pxbPieChartOptions: ChartOptions = {
   responsive: true,
   legend: {
      display: false
   }
};

export const pxbPieChartLabels = [
   'Chrome', 'Internet Explorer',
   'Firefox', 'Edge', 'Safari', '' +
   'Sogou Explorer', 'Opera', 'QQ', 'Other'
];

export const pxbPieChartData: ChartDataSets[] = [{
   data: [61.41, 11.84, 10.85, 4.67, 4.18, 1.64, 1.6, 1.2, 2.61],
   backgroundColor: pxbColorWheel,
   borderWidth: 3,
   hoverBorderColor: pxbColors.gray[50],
   hoverBorderWidth: 5
}];

