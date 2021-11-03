# ChartJS Configurations
[![](https://img.shields.io/npm/v/@brightlayer-ui/chartjs.svg?label=@brightlayer-ui/chartjs&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/chartjs)
[![](https://img.shields.io/circleci/project/github/brightlayer-ui/chartjs/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/chartjs/tree/master)

This package contains basic support for ChartJS line, pie, bar, and donut graphs for use with Brightlayer UI. 

## Installation
Install with npm
```
npm install --save @brightlayer-ui/chartjs
```
or yarn
```
yarn add @brightlayer-ui/chartjs
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
} from '@brightlayer-ui/chartjs'; 
```

and then use these functions create Brightlayer UI themed chart configurations.

```
import { createLineChartConfig, drawChart } from '@brightlayer-ui/chartjs'
...
const lineChartConfig = createLineChartConfig();
drawChart(lineChartConfig, 'graphId');
```
This will use default sample data to render a chart in your application.  

Read the following section for instructions on specifying your own configuration/data.

## Advanced Usage
When you are ready to customize charts of your own, you can modify the returned configuration object before drawing it. 

```
import { createPieChartConfig, drawChart } from '@brightlayer-ui/chartjs';
...
const config = createPieChartConfig();
config.data.datasets[0].backgroundColor = ['red', 'blue', 'green'];
drawChart(config, 'pie-chart-id');

```
This configuration object will accept any property than can be supplied to a standard ChartJS config object ([API Reference](https://www.chartjs.org/docs/latest/)).

## Demos
| Framework           | Live Examples  |
| ---------------- |------------------|
| Angular | [View on Stackblitz](https://stackblitz.com/github/brightlayer-ui/chartjs/tree/master/angular-demo)
| React | [View on Code Sandbox](https://codesandbox.io/s/github/brightlayer-ui/chartjs/tree/master/react-demo)