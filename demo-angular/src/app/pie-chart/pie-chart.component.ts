import {Component, OnInit} from '@angular/core';
import {PxbChartJsUtils} from '@pxblue/chartjs';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

   pieChart;

  ngOnInit(): void {
     PxbChartJsUtils.drawChart(PxbChartJsUtils.createPieChart(), 'pieChart');
  }
}
