import { Component, OnInit } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import {drawChart, createLineChart} from "@pxblue/chartjs";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {

   colors = [PXBColors.blue[500], PXBColors.blue[200], PXBColors.blue[200]];

   ngOnInit(): void {
      const config = createLineChart();
      config.data.datasets[0].backgroundColor = this.colors[0];
      config.data.datasets[1].backgroundColor = this.colors[1];
      config.data.datasets[2].backgroundColor = this.colors[2];
      drawChart(config, 'lineChart');
   }
}
