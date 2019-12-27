import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import {BrokerComponent} from './broker.component';
import { AddDesigndialogComponent } from './add-designdialog/add-designdialog.component';
import { SharedModule } from '../shared/shared.module';


export const routes=[
  {path:'',component:BrokerComponent,pathMath:'full',data:{breadcrumb:''}}

]
@NgModule({
  declarations: [BrokerComponent, AddDesigndialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ],

  entryComponents:[AddDesigndialogComponent]
})
export class BrokerModule { }
