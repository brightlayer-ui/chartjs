import {Component, OnInit} from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import {PxBlueChartUtils} from '@pxblue/chartjs';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html'
})
export class BarGraphComponent implements OnInit {

  colors = [PXBColors.blue[900], PXBColors.blue[500], PXBColors.blue[200]];

  ngOnInit(): void {
    const config = PxBlueChartUtils.createBarChartConfig();
    config.data.datasets[0].backgroundColor = this.colors[0];
    config.data.datasets[1].backgroundColor = this.colors[1];
    config.data.datasets[2].backgroundColor = this.colors[2];
    PxBlueChartUtils.drawChart(config, 'barChart');
  }
}
