# ChartJS Configurations
[![](https://img.shields.io/npm/v/@pxblue/chartjs.svg?label=@pxblue/chartjs&style=flat)](https://www.npmjs.com/package/@pxblue/chartjs)
[![](https://img.shields.io/circleci/project/github/pxblue/chartjs/master.svg?style=flat)](https://circleci.com/gh/pxblue/chartjs/tree/master)

This package contains basic support for ChartJS line, pie, bar, and donut graphs for use with PX Blue. 

## Installation
Install with yarn
```
yarn add @pxblue/chartjs
```

## Basic Usage

To use this library, specify in your HTML where you want your graph to be rendered: 
```
<canvas id="graphId"></canvas>
```

Import the chart generator functions from the package:

```
import { 
    drawGraph, 
    createLineChartConfig, 
    createPieChartConfig, 
    createBarChartConfig, 
    createDonutChartConfig
} from '@pxblue/chartjs'; 
```

and then use these functions create PXBlue-themed chart configurations.

```
import { createLineChartConfig, drawChart } from '@pxblue/chartjs'
...
const lineChartConfig = createLineChartConfig();
drawChart(lineChartConfig, 'graphId');
```
This will use default sample data to render a chart in your application.  

Read the following section for instructions on specifying your own configuration/data.

For more detailed instructions on using ChartJS in your application, see our demos for [Angular](https://stackblitz.com/github/pxblue/chartjs/tree/master/demo-angular) or [React](https://codesandbox.io/s/github/pxblue/chartjs/tree/master/demo-react).

## Advanced Usage
When you are ready to customize charts of your own, you can modify the returned configuration object before drawing it. 

```
import { createPieChartConfig, drawChart } from '@pxblue/chartjs';
...
const config = createPieChartConfig();
config.data.datasets[0].backgroundColor = ['red', 'blue', 'green'];
drawChart(config, 'pie-chart-id');

```
This configuration object will accept any property than can be supplied to a standard ChartJS config object ([API Reference](https://www.chartjs.org/docs/latest/)).
