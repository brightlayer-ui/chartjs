import {Helvetica, pxbColorWheel} from '../util/styles';
import {getRandomData} from '../util/utilities';

export const pxbBarChartLabels = ['Jan', 'Feb', 'Marc', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const pxbBarChartData = createRandomDataSet(3, 12);
export const pxbBarChartOptions = {
  responsive: true,
  legend: {
    position: 'bottom',
    labels: {
      usePointStyle: true,
      fontFamily: Helvetica
    }
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Last 12 Months'
        }
      }
    ],
    yAxes: [
      {
        barThickness: 50,
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Energy (kWh)'
        }
      }
    ]
  }
};

function createRandomDataSet(dataSets: number, points: number) {
  const data = [];
  for (let i = 0 ; i < dataSets; i++) {
    data.push({
       data: getRandomData(100, false, points),
       label: 'Device ' + (1 + i),
       backgroundColor: pxbColorWheel[i],
    });
  }
  return data;
}
