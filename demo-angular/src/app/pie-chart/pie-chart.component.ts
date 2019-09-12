import {Component, OnInit} from '@angular/core';
import {PxBlueChartUtils} from '@pxblue/chartjs';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

   pieChart;

  ngOnInit(): void {
     PxBlueChartUtils.drawChart(PxBlueChartUtils.createPieChart(), 'pieChart');
  }
}
