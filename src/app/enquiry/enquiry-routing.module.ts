import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskaComponent } from './aska/aska.component';
import { AskbComponent } from './askb/askb.component';
//import { AskcComponent } from './common/askc/askc.component';

const routes: Routes = [
  { path: '', redirectTo: 'aska', pathMatch: 'full'},
  { path: 'aska', component: AskaComponent},
  { path: 'askb', component: AskbComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryRoutingModule {}
