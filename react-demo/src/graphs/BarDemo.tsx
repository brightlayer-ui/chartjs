import React, { Component }  from 'react';
import {drawChart, createBarChartConfig} from '@pxblue/chartjs';
// @ts-ignore
import * as PXBColors from '@pxblue/colors';

export default class BarDemo extends Component {

   colors = [PXBColors.blue[900], PXBColors.blue[500], PXBColors.blue[200]];

   render() {
      return (
         <div className="graph">
            <canvas id="barDemo"></canvas>
         </div>
      );
   }

   componentDidMount() {
      const config = createBarChartConfig();
      config.data.datasets[0].backgroundColor = this.colors[0];
      config.data.datasets[1].backgroundColor = this.colors[1];
      config.data.datasets[2].backgroundColor = this.colors[2];
      drawChart(config, 'barDemo');
   }
}
