import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterviewComponent } from './masterview.component'
import { SharedModule } from '../../../shared/shared.module';

@NgModule({

declarations: [MasterviewComponent],
imports: [
  CommonModule,
  SharedModule
],
exports:[MasterviewComponent]
})


export class MasterviewModule { }
