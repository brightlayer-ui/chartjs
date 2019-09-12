import React, { Component }  from 'react';
import {PxbChartJsUtils} from "@pxblue/chartjs";

export default class LineDemo extends Component {
   render() {
      return (
         <div>
            <canvas id="lineDemo"></canvas>
         </div>
      );
   }

   componentDidMount() {
      PxbChartJsUtils.drawChart(PxbChartJsUtils.createLineChart(), 'lineDemo');
   }
}
