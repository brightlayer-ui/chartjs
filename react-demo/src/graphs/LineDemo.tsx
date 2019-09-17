import React, { Component }  from 'react';
import {drawChart, createLineChartConfig} from '@pxblue/chartjs';

export default class LineDemo extends Component {
   render() {
      return (
         <div className='graph'>
            <canvas id="lineDemo"></canvas>
         </div>
      );
   }

   componentDidMount() {
      drawChart(createLineChartConfig(), 'lineDemo');
   }
}
