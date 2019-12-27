import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { DragulaService } from 'ng2-dragula';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../shared/services/alert.service';
import { CalendarModule } from 'angular-calendar';
import { FullCalendarModule } from 'ng-fullcalendar';
import { LeadComponent } from './lead/lead.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CampaignPerformanceDashboardComponent } from './campaign-performance-dashboard/campaign-performance-dashboard.component'
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ProspectComponent } from './prospect/prospect.component';
import {ProspectdashboardComponent} from './prospectdashboard/prospectdashboard.component';
import { InformationComponent } from './prospectdashboard/information/information.component';
import { TextNotesComponent } from './prospectdashboard/text-notes/text-notes.component';
import { CallNotesComponent } from './prospectdashboard/call-notes/call-notes.component';
import { EmailComponent } from './prospectdashboard/email/email.component'
// import { OnlinecampaignComponent } from './campaigns/onlinecampaign/onlinecampaign.component';
// import { OfflinecampainComponent } from './campaigns/offlinecampain/offlinecampain.component';
// import { CampaignperformancedashboardComponent } from './campaigns/campaignperformancedashboard/campaignperformancedashboard.component';

export const routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  // {path:'',component:MarketingComponent,pathMatch:'full',data:{breadcrumb:''}},
  // { path: 'campaigns', component:CampaignsComponent, data: { breadcrumb: 'Campaigns' } },
  { path: 'campaigns',loadChildren: './campaigns/campaign.module#CampaignModule', data : { breadcrumb : 'Campaign'} },
  { path: 'lead',  loadChildren: './lead/lead.module#LeadModule',data : { breadcrumb : 'Lead'} },
  { path: 'prospect',  loadChildren: './prospect/prospect.module#ProspectModule',data : { breadcrumb : 'prospect'} },
  { path: 'contacts', component:ContactsComponent, data: { breadcrumb: 'Contacts'} },
  { path: 'prosprctsDashboard', component: ProspectdashboardComponent, children:[
    {path :'', redirectTo:'information',pathMatch:'full'},
    {path:'callnotes',component:CallNotesComponent,data:{breadcrumb:'Call Notes'}},
    {path:'information',component:InformationComponent,data:{breadcrumb:'Information'}},
    {path:'textNotes',component:TextNotesComponent,data:{breadcrumb:'Text Notes'}},
    {path:'email',component:EmailComponent,data:{breadcrumb:'Email'} },
  ], data : { breadcrumb : 'Prospect Dashboard'} },
  { path: 'campaignPerformance', component:CampaignPerformanceDashboardComponent,  data: { breadcrumb: 'Campaign Performance Dashboard'} },
  // { path: 'availabilitycalendar', component:AvailabilityCalendarComponent,loadChildren: './availability-calendar/availability-calendar.module#AvailabilityCalendarModule', data: { breadcrumb: 'Availability Calendar'} },
  // { path: 'kanban', component:KanbanComponent, pathMatch: 'full', data: { breadcrumb: 'Lead Status/Kanban'} },
  // { path: 'role', component:RoleComponent, pathMatch: 'full', data: { breadcrumb: 'Role'} },
 
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),CalendarModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,FullCalendarModule,HighchartsChartModule,ChartModule],

  providers: [DragulaService, AlertService],

  declarations: [ ContactsComponent, CampaignPerformanceDashboardComponent,LeadComponent,CampaignsComponent, ProspectComponent,ProspectdashboardComponent, InformationComponent, TextNotesComponent, CallNotesComponent, EmailComponent
  ],

  entryComponents: [
  
  ]
})
export class MarketingModule { }
