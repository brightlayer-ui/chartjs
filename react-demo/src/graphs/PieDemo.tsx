import React, { Component }  from 'react';
import {drawChart, createPieChartConfig} from '@pxblue/chartjs';

export default class PieDemo extends Component {

   render() {
      return (
         <div className="graph" style={{maxWidth: '300px'}}>
            <canvas id="pieChart"></canvas>
         </div>
      );
   }

   componentDidMount() {
      drawChart(createPieChartConfig(), 'pieChart');
   }
}
