import React, { Component } from 'react';
import { drawChart, createBarChartConfig } from '@brightlayer-ui/chartjs';
// @ts-ignore
import * as BLUIColors from '@brightlayer-ui/colors';

export default class BarDemo extends Component {
    colors = [BLUIColors.blue[900], BLUIColors.blue[500], BLUIColors.blue[200]];

    render() {
        return (
            <div className="graph">
                <canvas id="barDemo"></canvas>
            </div>
        );
    }

    componentDidMount() {
        const config = createBarChartConfig();
        // @ts-ignore
        config.data.datasets[0].backgroundColor = this.colors[0];
        // @ts-ignore
        config.data.datasets[1].backgroundColor = this.colors[1];
        // @ts-ignore
        config.data.datasets[2].backgroundColor = this.colors[2];
        drawChart(config, 'barDemo');
    }
}
