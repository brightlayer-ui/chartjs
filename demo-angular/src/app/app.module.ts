import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DonutComponent } from './donut/donut.component';

@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    PieChartComponent,
    LineChartComponent,
    DonutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [BarGraphComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
