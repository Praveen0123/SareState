import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { RouterModule } from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from '@angular/material';
//import { AlertsTmComponent } from './taskmanager/alerts-tm/alerts-tm.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { IncomingOrderQueueComponent } from './dashboard/incoming-order-queue/incoming-order-queue.component';
import { ManagePatientOrdersComponent } from './dashboard/manage-patient-orders/manage-patient-orders.component';
import { ManagePatientListComponent } from './dashboard/manage-patient-list/manage-patient-list.component';
import { TextLogComponent } from './dashboard/text-log/text-log.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TreeModule } from 'primeng/primeng';
import { PipesModule } from '../theme/pipes/pipes.module';

import { ProfileAndInsuranceDialogComponent } from './dashboard/incoming-order-queue/profile-and-insurance-dialog/profile-and-insurance-dialog.component';
import { AddTextDialogComponent } from './dashboard/text-log/add-text-dialog/add-text-dialog.component';


import { AddNewPatientOrdersComponent } from './dashboard/manage-patient-orders/add-new-patient-orders/add-new-patient-orders.component';
import { AddNewPatientOrderComponent } from './dashboard/manage-patient-list/add-new-patient-order/add-new-patient-order.component';
import { InsuranceDialogComponent } from './dashboard/manage-patient-list/insurance-dialog/insurance-dialog.component';
import { AddIncomingMessageDialogComponent } from './dashboard/text-log/add-incoming-message-dialog/add-incoming-message-dialog.component';
import { AddMessageDialogComponent } from './dashboard/text-log/add-message-dialog/add-message-dialog.component';
import { AddIncomingOrderComponent } from './dashboard/incoming-order-queue/add-incoming-order/add-incoming-order.component';

import { AlertPromise } from 'selenium-webdriver';
import { AlertService } from '../shared/services/alert.service';
import { TextMaskModule } from 'angular2-text-mask';
import { QuillModule } from 'ngx-quill';
import { LeadGenerationDashboardComponent } from './lead-generation-dashboard/lead-generation-dashboard.component';
import {SalesDashboardComponent} from './sales-dashboard/sales-dashboard.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';


//import { ReportsComponent } from './reports/reports.component';
export const routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: 'record', loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full', data: { breadcrumb: 'Analytics' } },
  // { path: 'manageorders', component: ManageOrdersComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Orders'} },
  // { path: 'scheduling', component: SchedulingComponent,pathMatch: 'full', data : { breadcrumb : 'Schedule'} },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }},
  { path: 'SalesDashboard', component: SalesDashboardComponent, data : { breadcrumb : 'Sales Dashboard'} },
  { path: 'leadgenerationdashboard', component: LeadGenerationDashboardComponent,pathMatch: 'full', data : { breadcrumb : 'Lead Dashboard'} },
  // { path: 'managecases', component: ManagePatientListComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Cases'} },
  // { path: 'managepatientrecords', component: ManagePatientOrdersComponent,pathMatch: 'full', data : { breadcrumb : 'Manage Patients'} },
  // { path: 'textlog', component: TextLogComponent,loadChildren: './dashboard/text-log/text-log.module#TextLogModule', data : { breadcrumb : 'Text Log'} },
 
];

@NgModule({
  imports: [
    CommonModule,FormsModule,SharedModule,ConfirmationPopoverModule,OwlDateTimeModule, OwlNativeDateTimeModule,TextMaskModule,
    RouterModule.forChild(routes),ReactiveFormsModule,TreeModule,QuillModule,PipesModule, ChartModule,
    HighchartsChartModule
  ],
  declarations: [//TaskmanagerComponent,AlertsTmComponent//, ReportsComponentManageOrdersComponent,
    AddNewPatientOrdersComponent,
    
    ProfileAndInsuranceDialogComponent,
    IncomingOrderQueueComponent,
    ManagePatientOrdersComponent,
    ManagePatientListComponent,
    
    TextLogComponent,
    AddIncomingOrderComponent,
    AddTextDialogComponent,
    AddMessageDialogComponent,
    AddIncomingMessageDialogComponent,
    InsuranceDialogComponent,
    AddNewPatientOrderComponent,
    LeadGenerationDashboardComponent,
    SalesDashboardComponent,
    
  ],
  providers:[
    
    AlertService,
     {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        ...new MatDialogConfig(),
        hasBackdrop: false,
      } as MatDialogConfig,
    }
  ],
  entryComponents : [AddIncomingOrderComponent,ProfileAndInsuranceDialogComponent,AddNewPatientOrdersComponent,InsuranceDialogComponent,AddNewPatientOrderComponent,AddIncomingMessageDialogComponent,AddTextDialogComponent,AddMessageDialogComponent]
})
export class AnalyticsModule { }


