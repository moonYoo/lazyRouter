import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskaComponent } from './aska/aska.component';
import { AskbComponent } from './askb/askb.component';
import { AskcComponent } from './common/askc/askc.component';
//import { EnquiryService } from './enquiry.service';
import { EnquiryRoutingModule } from './enquiry-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EnquiryRoutingModule
  ],
  declarations: [AskaComponent, AskbComponent, AskcComponent],
  providers: []
})
export class EnquiryModule { }
