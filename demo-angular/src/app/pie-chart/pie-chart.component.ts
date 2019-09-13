import {Component, OnInit} from '@angular/core';
import {drawChart, createPieChartConfig} from "@pxblue/chartjs";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

  ngOnInit(): void {
     drawChart(createPieChartConfig(), 'pieChart');
  }
}
