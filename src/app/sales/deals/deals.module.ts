import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmCoreModule } from '@agm/core';
import { GridviewComponent } from './gridview/gridview.component';
import { KanbanviewComponent } from './kanbanview/kanbanview.component';
import { MapviewComponent} from './mapview/mapview.component';
import { MasterviewModule} from './masterview/masterview.module';
import { AddDealdialogComponent } from './gridview/add-dealdialog/add-dealdialog.component'
import {DealsComponent} from './deals.component'





export const routes = [
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  // { path: 'offlinecampaigns', component:OfflinecampainComponent,loadChildren:"./physician-timings/physician-timings.module#PhysicianTimingsModule", data: { breadcrumb: 'Timings'} },
  { path: 'map', component:MapviewComponent, data: { breadcrumb:'Map View'} },
  { path: 'grid', component:GridviewComponent,  data: { breadcrumb:'Grid View'} },
  { path: 'kanban', component:KanbanviewComponent, data : { breadcrumb :'Kanban View'} },
 
  // { path: 'campaignperformance', component:CampaignperformancedashboardComponent,  data: { breadcrumb: 'Campaign Performance'} },
  // { path: 'specialcase', component:PhysicianSpecialCaseComponent, pathMatch: 'full', data: { breadcrumb: 'Unavailable'} },
  
 
];
@NgModule({
  declarations: [GridviewComponent,KanbanviewComponent,MapviewComponent, DealsComponent,AddDealdialogComponent ],
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
    PipesModule,ConfirmationPopoverModule,QuillModule,HighchartsChartModule ,ChartModule,AgmJsMarkerClustererModule,MasterviewModule
  ],
  providers:[SharedModule,AlertService,DragulaService],
  entryComponents:[AddDealdialogComponent]

 
 
})

export class DealsModule { }
