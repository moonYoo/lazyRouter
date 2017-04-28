import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'latent', loadChildren: 'app/latent-info/latent-info.module#LatentInfoModule' },
  { path: 'enquiry', loadChildren: 'app/enquiry/enquiry.module#EnquiryModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
