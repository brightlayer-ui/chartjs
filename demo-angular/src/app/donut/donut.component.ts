import {Component, OnInit} from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import {PxBlueChartUtils} from '@pxblue/chartjs';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html'
})
export class DonutComponent implements OnInit {

  colors = [PXBColors.blue[900], PXBColors.blue[500], PXBColors.blue[200]];
  ngOnInit(): void {
    const config = PxBlueChartUtils.createDonutChartConfig();
    config.data.datasets[0].backgroundColor = this.colors;
    PxBlueChartUtils.drawChart(config, 'donutChart');
  }
}
