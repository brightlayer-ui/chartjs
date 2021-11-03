import { ChartDataSets, ChartOptions } from 'chart.js';
import { bluiColors, bluiColorWheel } from '../util/styles';

export const bluiDonutChartOptions: ChartOptions = {
    cutoutPercentage: 75,
    responsive: true,
    legend: {
        display: false,
    },
};

export const bluiDonutChartLabels = ['Device 1', 'Device 2', 'Device 3'];

export const bluiDonutChartData: ChartDataSets[] = [
    {
        data: [10.85, 11.84, 61.41],
        backgroundColor: bluiColorWheel,
        borderWidth: 5,
        hoverBorderWidth: 5,
        hoverBorderColor: bluiColors.gray[50],
    },
];
