import React, { Component }  from 'react';
import {drawChart, createDonutChartConfig} from '@pxblue/chartjs';

export default class DonutDemo extends Component {
   render() {
      return (
         <div>
            <canvas id="donutChart"></canvas>
         </div>
      );
   }

   componentDidMount() {
      drawChart(createDonutChartConfig(), 'donutChart');
   }
}
