import { Component, OnInit } from '@angular/core';
import * as BLUIColors from '@brightlayer-ui/colors';
import { drawChart, createLineChartConfig } from '@brightlayer-ui/chartjs';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
})
export class LineChartComponent implements OnInit {
    colors = [BLUIColors.blue[500], BLUIColors.blue[200], BLUIColors.blue[200]];

    ngOnInit(): void {
        const config = createLineChartConfig();
        config.data.datasets[0].backgroundColor = this.colors[0];
        config.data.datasets[1].backgroundColor = this.colors[1];
        config.data.datasets[2].backgroundColor = this.colors[2];
        drawChart(config, 'lineChart');
    }
}
