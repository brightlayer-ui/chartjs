import { ChartDataSets, ChartOptions } from 'chart.js';
import { OpenSans, pxbColors } from '../util/styles';
import { getRandomData } from '../util/utilities';

export const pxbLineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const pxbLineChartData: ChartDataSets[] = [
    {
        data: getRandomData(100, false, 12),
        label: 'Device 1',
        fill: false,
        borderColor: pxbColors.blue[900],
        backgroundColor: pxbColors.blue[900],
    },
    {
        data: getRandomData(20, false, 12),
        label: 'Device 2',
        fill: false,
        borderColor: pxbColors.blue[200],
        backgroundColor: pxbColors.blue[200],
    },
    {
        data: getRandomData(20, false, 12),
        label: 'Device 3',
        fill: false,
        borderColor: pxbColors.blue[200],
        backgroundColor: pxbColors.blue[200],
    },
];
export const pxbLineChartOptions: ChartOptions = {
    elements: {
        line: {
            tension: 0,
        },
    },
    responsive: true,
    tooltips: {
        enabled: true,
    },
    legend: {
        position: 'bottom',
        labels: {
            boxWidth: 12,
        },
    },
    scales: {
        xAxes: [
            {
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Last 20 Seconds',
                },
            },
        ],
        yAxes: [
            {
                barThickness: 20,
                scaleLabel: {
                    display: true,
                    labelString: 'Numbers',
                },
            },
        ],
    },
};
