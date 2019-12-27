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
import {OnlinecampaignComponent} from './onlinecampaign/onlinecampaign.component'
import {OfflinecampainComponent} from './offlinecampain/offlinecampain.component'
import {CampaignperformancedashboardComponent} from './campaignperformancedashboard/campaignperformancedashboard.component'
import { AlertService } from '../../shared/services/alert.service';
// import { MastercampaignComponent } from './mastercampaign/mastercampaign.component';
import {MastercampaignModule} from './mastercampaign/mastercampaign.module'
import { QuillModule } from 'ngx-quill';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { AddCampaignComponent } from './offlinecampain/add-campaign/add-campaign.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AddDialogcampaignComponent } from './onlinecampaign/add-dialogcampaign/add-dialogcampaign.component';




export const routes = [
  { path: '', redirectTo: 'offlinecampaigns', pathMatch: 'full' },
  // { path: 'offlinecampaigns', component:OfflinecampainComponent,loadChildren:"./physician-timings/physician-timings.module#PhysicianTimingsModule", data: { breadcrumb: 'Timings'} },
  { path: 'onlinecampaigns', component:OnlinecampaignComponent, data: { breadcrumb: 'Online Campaigns'} },
  // { path: 'offlinecampaigns', component:OfflinecampainComponent,  data: { breadcrumb: 'onlinecampaigns'} },
  { path: 'offlinecampaigns', component: OfflinecampainComponent, data : { breadcrumb : 'Offline Campaigns'} },
  { path: 'campaignperformance', component:CampaignperformancedashboardComponent,  data: { breadcrumb: 'Campaign Performance'} },
  // { path: 'specialcase', component:PhysicianSpecialCaseComponent, pathMatch: 'full', data: { breadcrumb: 'Unavailable'} },
  
 
];

@NgModule({
  declarations: [OnlinecampaignComponent,OfflinecampainComponent,CampaignperformancedashboardComponent, AddCampaignComponent, AddDialogcampaignComponent, ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,MastercampaignModule,QuillModule,HighchartsChartModule ,ChartModule
  ],
  providers:[SharedModule,AlertService,DragulaService],
  entryComponents:[AddCampaignComponent,AddDialogcampaignComponent]

 
 
})
export class CampaignModule { }
