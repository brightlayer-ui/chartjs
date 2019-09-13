import {Component, OnInit} from '@angular/core';
import {drawChart, createPieChart} from "@pxblue/chartjs";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

   pieChart;

  ngOnInit(): void {
     drawChart(createPieChart(), 'pieChart');
  }
}
