import React, { Component }  from 'react';
import {drawChart, createPieChart} from '@pxblue/chartjs';

export default class PieDemo extends Component {
   render() {
      return (
         <div>
            <canvas id="pieChart"></canvas>
         </div>
      );
   }

   componentDidMount() {
      drawChart(createPieChart(), 'pieChart');
   }
}
