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
import { PortfolioComponent} from './portfolio/portfolio.component';
import { InventoryComponent} from './inventory/inventory.component';
import { AddDesignDialogComponent } from './inventory/add-design-dialog/add-design-dialog.component';
import { AdddesignDialogComponent } from './portfolio/adddesign-dialog/adddesign-dialog.component';


export const routes = [
  { path: '', redirectTo: 'inventory', pathMatch: 'full' },
  // { path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
  // { path: 'masterdata', component: MasterDataComponent,loadChildren: './master-data/master-data.module#MasterDataModule', data : { breadcrumb : 'Master Data'} },
  { path: 'portfolio', component:PortfolioComponent, data: { breadcrumb: 'Portfolio'} },
  { path: 'inventory', component:InventoryComponent, data: { breadcrumb: 'Inventory'} },
 
];



@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),CalendarModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,FullCalendarModule],

  providers: [DragulaService, AlertService],

  declarations: [ 
    PortfolioComponent,
    InventoryComponent,
    AddDesignDialogComponent,
    AdddesignDialogComponent,
    ],

  entryComponents: [AddDesignDialogComponent,AdddesignDialogComponent]
})
export class PropertyModule { }
