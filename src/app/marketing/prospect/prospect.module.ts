import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridviewComponent } from './gridview/gridview.component';
import { KanbanviewComponent } from './kanbanview/kanbanview.component';
import {MapviewComponent} from './mapview/mapview.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DragulaService } from 'ng2-dragula';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../../shared/services/alert.service';
// import { MastercampaignComponent } from './mastercampaign/mastercampaign.component';
import { QuillModule } from 'ngx-quill';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MasterprospectviewModule} from './masterprospectview/masterprospectview.module';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmCoreModule } from '@agm/core';
import { AddprospectComponent } from './gridview/addprospect/addprospect.component';
import { AddremarkmodalComponent } from './gridview/addremarkmodal/addremarkmodal.component';
import { ProspectDashboardComponent } from './prospect-dashboard/prospect-dashboard.component';

export const routes = [
  { path: '', redirectTo: 'Gridview', pathMatch: 'full' },
  // { path: 'offlinecampaigns', component:OfflinecampainComponent,loadChildren:"./physician-timings/physician-timings.module#PhysicianTimingsModule", data: { breadcrumb: 'Timings'} },
  { path: 'Mapview', component:MapviewComponent, data: { breadcrumb: 'Map View'} },
  { path: 'Gridview', component:GridviewComponent,  data: { breadcrumb: 'Grid View'} },
  { path: 'Kanbanview', component: KanbanviewComponent, data : { breadcrumb : 'Kanban View'} },
  { path: 'prosprctDashboard', component: ProspectDashboardComponent, data : { breadcrumb : 'Prospect Dashboard'} },
  // { path: 'campaignperformance', component:CampaignperformancedashboardComponent,  data: { breadcrumb: 'Campaign Performance'} },
  // { path: 'specialcase', component:PhysicianSpecialCaseComponent, pathMatch: 'full', data: { breadcrumb: 'Unavailable'} },
  
 
];


@NgModule({
  declarations: [GridviewComponent,KanbanviewComponent,MapviewComponent, AddprospectComponent, AddremarkmodalComponent, ProspectDashboardComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule,AgmCoreModule,
    PipesModule,ConfirmationPopoverModule,QuillModule,HighchartsChartModule ,ChartModule,MasterprospectviewModule,AgmJsMarkerClustererModule
  ],
  providers:[SharedModule,AlertService,DragulaService],
  entryComponents:[AddremarkmodalComponent,AddprospectComponent]

 
 
})

export class ProspectModule { }
