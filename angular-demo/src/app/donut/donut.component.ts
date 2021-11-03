import { Component, OnInit } from '@angular/core';
import * as BLUIColors from '@brightlayer-ui/colors';
import { drawChart, createDonutChartConfig } from '@brightlayer-ui/chartjs';

@Component({
    selector: 'app-donut',
    templateUrl: './donut.component.html',
})
export class DonutComponent implements OnInit {
    colors = [BLUIColors.blue[900], BLUIColors.blue[500], BLUIColors.blue[200]];

    ngOnInit(): void {
        const config = createDonutChartConfig();
        config.data.datasets[0].backgroundColor = this.colors;
        drawChart(config, 'donutChart');
    }
}
