import {Component, OnInit} from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import {drawChart, createDonutChartConfig} from "@pxblue/chartjs";

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html'
})
export class DonutComponent implements OnInit {

  colors = [PXBColors.blue[900], PXBColors.blue[500], PXBColors.blue[200]];

  ngOnInit(): void {
    const config = createDonutChartConfig();
    config.data.datasets[0].backgroundColor = this.colors;
    drawChart(config, 'donutChart');
  }
}
