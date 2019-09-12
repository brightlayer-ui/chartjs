import {pxbColors, pxbColorWheel} from '../util/styles';

export const pxbDonutChartOptions = {
   cutoutPercentage: 75,
   responsive: true,
   legend: {
      display: false
   }
};

export const pxbDonutChartLabels = ['Device 1', 'Device 2', 'Device 3'];

export const pxbDonutChartData = [
   {
      data: [10.85, 11.84, 61.41],
      backgroundColor: pxbColorWheel,
      borderWidth: 5,
      hoverBorderWidth: 5,
      hoverBorderColor: pxbColors.gray[50],
   },
];
