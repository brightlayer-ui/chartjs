import React, { Component }  from 'react';
import {drawChart, createLineChart} from '@pxblue/chartjs';

export default class LineDemo extends Component {
   render() {
      return (
         <div>
            <canvas id="lineDemo"></canvas>
         </div>
      );
   }

   componentDidMount() {
      drawChart(createLineChart(), 'lineDemo');
   }
}
