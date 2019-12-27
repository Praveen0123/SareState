import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AlertComponent} from './alert.component'



export const routes =[
  {path:'',component:AlertComponent,pathMatch:'full',data:{breadcrumb:''}}
];
@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class AlertModule { }
