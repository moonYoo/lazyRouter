import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { latentInfoComponent } from './latent-info.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';
import { ComponentcComponent } from './common/componentc/componentc.component';

const routes: Routes = [
  { path: '', component: latentInfoComponent,
    children: [
      { path: '',    component: ComponentaComponent },
      { path: 'comc',    component: ComponentcComponent },
      { path: 'comb', component: ComponentbComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatentInfoRoutingModule {}
