import { ChartDataSets, ChartOptions } from 'chart.js';
import { bluiColorWheel } from '../util/styles';
import { getRandomData } from '../util/utilities';

export const bluiBarChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const bluiBarChartData = createBarChartData(3, 12);
export const bluiBarChartOptions: ChartOptions = {
    responsive: true,
    legend: {
        position: 'bottom',
        labels: {
            usePointStyle: true,
        },
    },
    scales: {
        xAxes: [
            {
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Last 12 Months',
                },
            },
        ],
        yAxes: [
            {
                barThickness: 50,
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Energy (kWh)',
                },
            },
        ],
    },
};

function createBarChartData(dataSets: number, points: number): ChartDataSets[] {
    const data: ChartDataSets[] = [];
    for (let i = 0; i < dataSets; i++) {
        data.push({
            data: getRandomData(100, false, points),
            label: 'Device ' + (1 + i),
            backgroundColor: bluiColorWheel[i],
        });
    }
    return data;
}
