import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AgmCoreModule } from '@agm/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TrendChartComponent } from './trend-chart/trend-chart.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

// import { DataComponent } from './trend-chart/data/data.component';


export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full', data :{breadcrumb : 'Dashboard'} }
];

@NgModule({
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    AgmCoreModule,
    ChartModule,
    HighchartsChartModule,AgmJsMarkerClustererModule
  ],
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    TrendChartComponent,
    // DataComponent,
    
  ]
})
export class DashboardModule { }