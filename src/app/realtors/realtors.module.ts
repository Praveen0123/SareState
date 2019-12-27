import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import {RealtorsComponent} from './realtors.component';
import { AddrealtorsDialogComponent } from './addrealtors-dialog/addrealtors-dialog.component';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';
import { DataTableModule } from 'primeng/primeng';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlertService } from '../shared/services/alert.service';
import { CalendarModule } from 'angular-calendar';
import { FullCalendarModule } from 'ng-fullcalendar';


export const routes=[
  {path:'',component:RealtorsComponent,pathMath:'full',data:{breadcrumb:''}}

]
@NgModule({
  declarations: [RealtorsComponent, AddrealtorsDialogComponent],
  imports: [
    CommonModule, ModalModule, SharedModule, ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),CalendarModule,OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule.forChild(routes), DataTableModule, FormsModule, ReactiveFormsModule, TableModule,
    SharedModule,FullCalendarModule],

    providers: [DragulaService, AlertService],
  
    entryComponents:[AddrealtorsDialogComponent]
})
export class RealtorsModule { }
