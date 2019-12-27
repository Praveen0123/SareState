
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterprospectviewComponent } from './masterprospectview.component'
import { SharedModule } from '../../../shared/shared.module';

@NgModule({

declarations: [MasterprospectviewComponent],
imports: [
  CommonModule,
  SharedModule
],
exports:[MasterprospectviewComponent]
})


export class MasterprospectviewModule { }
