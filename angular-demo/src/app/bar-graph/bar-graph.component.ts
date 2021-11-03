import { Component, OnInit } from '@angular/core';
import * as BLUIColors from '@brightlayer-ui/colors';
import { drawChart, createBarChartConfig } from '@brightlayer-ui/chartjs';

@Component({
    selector: 'app-bar-graph',
    templateUrl: './bar-graph.component.html',
})
export class BarGraphComponent implements OnInit {
    colors = [BLUIColors.blue[900], BLUIColors.blue[500], BLUIColors.blue[200]];

    ngOnInit(): void {
        const config = createBarChartConfig();
        config.data.datasets[0].backgroundColor = this.colors[0];
        config.data.datasets[1].backgroundColor = this.colors[1];
        config.data.datasets[2].backgroundColor = this.colors[2];
        drawChart(config, 'barChart');
    }
}
