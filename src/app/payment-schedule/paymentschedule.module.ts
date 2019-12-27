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
import {PaymentScheduleComponent} from './payment-schedule.component';
import { AddDesignDialogComponent } from './add-design-dialog/add-design-dialog.component'

export const routes=[
  {path:'',component:PaymentScheduleComponent,pathMatch:'full',data:{breadcrumb:''}}
]


@NgModule({
  declarations: [PaymentScheduleComponent, AddDesignDialogComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),CalendarModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,FullCalendarModule],

  providers: [DragulaService, AlertService],
  entryComponents: [AddDesignDialogComponent,]
})
export class PaymentscheduleModule { }
