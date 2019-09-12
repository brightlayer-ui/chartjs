import React, { Component }  from 'react';
import {PxbChartJsUtils} from "@pxblue/chartjs";

export default class BarDemo extends Component {
   render() {
      return (
         <div>
            <canvas id="barDemo"></canvas>
         </div>
      );
   }

   componentDidMount() {
      PxbChartJsUtils.drawChart(PxbChartJsUtils.createBarChartConfig(), 'barDemo');
   }
}
