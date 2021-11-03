import React, { Component } from 'react';
import { drawChart, createDonutChartConfig } from '@brightlayer-ui/chartjs';
// @ts-ignore
import * as BLUIColors from '@brightlayer-ui/colors';

export default class DonutDemo extends Component {
    colors = [BLUIColors.blue[900], BLUIColors.blue[500], BLUIColors.blue[200]];

    render() {
        return (
            <div className="graph" style={{ maxWidth: '400px' }}>
                <canvas id="donutChart"></canvas>
            </div>
        );
    }

    componentDidMount() {
        const config = createDonutChartConfig();
        // @ts-ignore
        config.data.datasets[0].backgroundColor = this.colors;
        drawChart(config, 'donutChart');
    }
}
