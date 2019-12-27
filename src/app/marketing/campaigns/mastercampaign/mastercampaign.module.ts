import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastercampaignComponent } from './mastercampaign.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [MastercampaignComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[MastercampaignComponent]
})
export class MastercampaignModule { }
