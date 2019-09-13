# chartjs Configurations
[![](https://img.shields.io/npm/v/@pxblue/chartjs.svg?label=@pxblue/chartjs&style=flat)](https://www.npmjs.com/package/@pxblue/chartjs)
[![](https://img.shields.io/circleci/project/github/pxblue/chartjs/master.svg?style=flat)](https://circleci.com/gh/pxblue/chartjs/tree/master)

This package contains basic support for basic ChartJS line, pie, bar, and donut graphs for use with PX Blue. 

## Installation
Install with npm
```
npm install --save @pxblue/chartjs
```
or yarn
```
yarn add @pxblue/chartjs
```

## Basic Usage
To use this library, import the chart generator functions from the package:

```
import { 
    createLineChartConfig, 
    createPieChartConfig, 
    createBarChartConfig, 
    createDonutChartConfig,
    drawGraph 
} from '@pxblue/chartjs'; 
```

and then use them as placeholders in your application.

```
import { createLineChartConfig, drawChart } from '@pxblue/chartjs'
...
const lineChartConfig = createLineChartConfig();
drawChart(lineChartConfig);
```
This will use the default sample data to render a chart in your application. Read the following section for instructions on specifying your own configuration/data.

For more detailed instructions on using chartjs in your application, see our demos for [Angular](https://stackblitz.com/github/pxblue/chartjs/tree/master/demo-angular) or [React](https://stackblitz.com/github/pxblue/chartjs/tree/master/demo-react).

## Advanced Usage
When you are ready to customize charts of your own, you can pass a configuration object into the chart generator functions. 

```
import { createPieChartConfig } from '@pxblue/chartjs';
...
let myPieConfig = {
    series: [{
        name: 'Browsers',
        data:[
            {name: 'Chrome', y: 61.41},
            { name: 'Internet Explorer', y: 11.84 }, 
            { name: 'Firefox', y: 10.85 }
        ]
    }],
    colors: ['red', 'orange', 'yellow']
};
const pieChartConfig = createPieChart();
pieChartConfig

```
This configuration object will accept any property than can be supplied to a standard chartjs config object ([API Reference](https://api.chartjs.com/chartjs/)). Additionally, you may supply a ```colors``` property which is an array of colors to be used in the chart.


## Additional Utilities
This package also includes several utility functions and style variables to make it easier for users to customize certain parts of the chart configuration. Specific documentation for these functions/variables can be found in the source files.

```
import {
    OpenSans,       
    pxblueColors,
    sizes
} from '@pxblue/chartjs/styles';

import {
    getRandomData,       
    sharedTooltipFormatter,
    sharedTimeTooltipFormatter,
    simpleTooltipFormatter
} from '@pxblue/chartjs/utilities';
```