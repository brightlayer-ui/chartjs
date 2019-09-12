import React, { Component }  from 'react';
import {PxbChartJsUtils} from "@pxblue/chartjs";

export default class PieDemo extends Component {
   render() {
      return (
         <div>
            <canvas id="pieChart"></canvas>
         </div>
      );
   }

   componentDidMount() {
      PxbChartJsUtils.drawChart(PxbChartJsUtils.createPieChart(), 'pieChart');
   }
}
