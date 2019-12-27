import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadGenerationDashboardComponent } from './lead-generation-dashboard/lead-generation-dashboard.component';



export const routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
  // { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  { path: 'dashboard', component:DashboardComponent, pathMatch: 'full', data: { breadcrumb: 'Dashboard'} },
  { path: 'leadgenerationdashboard', component:LeadGenerationDashboardComponent, pathMatch: 'full', data: { breadcrumb: 'Lead generation Dashboard '} },
  // { path: 'availabilitycalendar', component:AvailabilityCalendarComponent,loadChildren: './availability-calendar/availability-calendar.module#AvailabilityCalendarModule', data: { breadcrumb: 'Availability Calendar'} },
  
 
];
@NgModule({
  declarations: [DashboardComponent, LeadGenerationDashboardComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    ]
})
export class Analytics2Module { }
