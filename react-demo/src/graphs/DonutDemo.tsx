import React, { Component }  from 'react';
import {drawChart, createDonutChartConfig} from '@pxblue/chartjs';
// @ts-ignore
import * as PXBColors from '@pxblue/colors';

export default class DonutDemo extends Component {

   colors = [PXBColors.blue[900], PXBColors.blue[500], PXBColors.blue[200]];

   render() {
      return (
         <div className="graph" style={{maxWidth: '400px'}}>
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
