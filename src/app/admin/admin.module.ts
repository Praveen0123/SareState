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
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Angular5TimePickerModule } from 'angular5-time-picker';
import { PermissionsComponent } from './permissions/permissions.component';
import { AddPermissionComponent } from './permissions/add-permission/add-permission.component';
import { RolePermissionsComponent } from './permissions/role-permissions/role-permissions.component';
import {KanbanComponent} from './kanban/kanban.component';
import  {RoleComponent}  from './role/role.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { AddKanbanComponent } from './kanban/add-kanban/add-kanban.component';

export const routes = [
  { path: '', redirectTo: 'permissions', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
  // { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  { path: 'permissions', component:PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions'} },
  { path: 'permissions/rolepermissions', component:RolePermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Role Permissions'} },
  // { path: 'availabilitycalendar', component:AvailabilityCalendarComponent,loadChildren: './availability-calendar/availability-calendar.module#AvailabilityCalendarModule', data: { breadcrumb: 'Availability Calendar'} },
  { path: 'kanban', component:KanbanComponent, pathMatch: 'full', data: { breadcrumb: 'Lead Status/Kanban'} },
  { path: 'role', component:RoleComponent, pathMatch: 'full', data: { breadcrumb: 'Role'} },
 
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),CalendarModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,FullCalendarModule],

  providers: [DragulaService, AlertService],

  declarations: [ 
    PermissionsComponent,
    AddPermissionComponent,
    RolePermissionsComponent,
    KanbanComponent,RoleComponent, AddRoleComponent, AddKanbanComponent],

  entryComponents: [
   AddPermissionComponent,AddRoleComponent,AddKanbanComponent
  ]
})
export class AdminModule { }
