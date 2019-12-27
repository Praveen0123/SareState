
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

import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';


import {CustomersComponent} from './customers/customers.component';
// import {DealsComponent} from './deals/deals.component';
import { AddDialogComponent } from './customers/add-dialog/add-dialog.component';
import { AddremarkmodalComponent } from './customers/addremarkmodal/addremarkmodal.component';
// import { GridviewComponent } from './deals/gridview/gridview.component';
// import { MapviewComponent } from './deals/mapview/mapview.component';
// import { KanbanviewComponent } from './deals/kanbanview/kanbanview.component';
// import { MasterviewComponent } from './deals/masterview/masterview.component';


export const routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  
   { path: 'customer', component:CustomersComponent, data: { breadcrumb: 'Customer' } },
   { path: 'deals', loadChildren:'./deals/deals.module#DealsModule', data: { breadcrumb: 'Deals' } },
  //  { path: 'campaigns',loadChildren: './campaigns/campaign.module#CampaignModule', data : { breadcrumb : 'Campaign'} },
  //  { path: 'lead',  loadChildren: './lead/lead.module#LeadModule',data : { breadcrumb : 'Lead'} },
  //  { path: 'prospect',  loadChildren: './prospect/prospect.module#ProspectModule',data : { breadcrumb : 'prospect'} },
   // { path: 'role', component:RoleComponent, pathMatch: 'full', data: { breadcrumb: 'Role'} },
  
 ];


@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),CalendarModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,FullCalendarModule,HighchartsChartModule,ChartModule],

  providers: [DragulaService, AlertService],
 

  declarations: [CustomersComponent, AddDialogComponent, AddremarkmodalComponent, 
  ],

  entryComponents: [AddDialogComponent,AddremarkmodalComponent]
})
export class SalesModule { }
