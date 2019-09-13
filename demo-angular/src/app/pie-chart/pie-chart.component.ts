import {Component, OnInit} from '@angular/core';
import {drawChart, createPieChartConfig} from "@pxblue/chartjs";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

   pieChart;

  ngOnInit(): void {
     drawChart(createPieChartConfig(), 'pieChart');
     const config = createPieChartConfig();
  }
}
