import { ChartDataSets, ChartOptions } from 'chart.js';
import { bluiColors, bluiColorWheel } from '../util/styles';

export const bluiPieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
        display: false,
    },
};

export const bluiPieChartLabels = [
    'Chrome',
    'Internet Explorer',
    'Firefox',
    'Edge',
    'Safari',
    '' + 'Sogou Explorer',
    'Opera',
    'QQ',
    'Other',
];

export const bluiPieChartData: ChartDataSets[] = [
    {
        data: [61.41, 11.84, 10.85, 4.67, 4.18, 1.64, 1.6, 1.2, 2.61],
        backgroundColor: bluiColorWheel,
        borderWidth: 3,
        hoverBorderColor: bluiColors.gray[50],
        hoverBorderWidth: 5,
    },
];
