import React, { Component }  from 'react';
import {drawChart, createBarChartConfig} from '@pxblue/chartjs';

export default class BarDemo extends Component {
   render() {
      return (
         <div>
            <canvas id="barDemo"></canvas>
         </div>
      );
   }

   componentDidMount() {
      drawChart(createBarChartConfig(), 'barDemo');
   }
}
