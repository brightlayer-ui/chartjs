/**
Copyright (c) 2021-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { ChartConfiguration } from 'chart.js';
import { bluiBarChartData, bluiBarChartLabels, bluiBarChartOptions } from './config/blui-barchart-config';
import { bluiDonutChartData, bluiDonutChartLabels, bluiDonutChartOptions } from './config/blui-donut-config';
import { bluiLineChartData, bluiLineChartLabels, bluiLineChartOptions } from './config/blui-linechart-config';
import { bluiPieChartData, bluiPieChartLabels, bluiPieChartOptions } from './config/blui-piechart-config';
import { OpenSans } from './util/styles';
import Chart = require('chart.js');
// @ts-ignore
import deepcopy = require('deepcopy');

/* This is a Utility wrapper around ChartJS that creates graph configurations with Eaton themes. */
export function createBarChartConfig(): ChartConfiguration {
    return deepcopy({
        type: 'bar',
        data: {
            labels: bluiBarChartLabels,
            datasets: bluiBarChartData,
        },
        options: bluiBarChartOptions,
    });
}

export function createPieChartConfig(): ChartConfiguration {
    return deepcopy({
        type: 'pie',
        data: {
            labels: bluiPieChartLabels,
            datasets: bluiPieChartData,
        },
        options: bluiPieChartOptions,
    });
}

export function createLineChartConfig(): ChartConfiguration {
    return deepcopy({
        type: 'line',
        data: {
            labels: bluiLineChartLabels,
            datasets: bluiLineChartData,
        },
        options: bluiLineChartOptions,
    });
}

export function createDonutChartConfig(): ChartConfiguration {
    return deepcopy({
        type: 'doughnut',
        data: {
            labels: bluiDonutChartLabels,
            datasets: bluiDonutChartData,
        },
        options: bluiDonutChartOptions,
    });
}

export function drawChart(config: ChartConfiguration, id: string): Chart {
    Chart.defaults.global.defaultFontFamily = OpenSans;
    const ctx = (document.getElementById(id) as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    return new Chart(ctx, config);
}
