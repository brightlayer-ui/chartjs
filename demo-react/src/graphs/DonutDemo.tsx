import React, { Component }  from 'react';
import {PxbChartJsUtils} from "@pxblue/chartjs";

export default class DonutDemo extends Component {
   render() {
      return (
         <div>
            <canvas id="donutChart"></canvas>
         </div>
      );
   }

   componentDidMount() {
      PxbChartJsUtils.drawChart(PxbChartJsUtils.createDonutChartConfig(), 'donutChart');
   }
}
