import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { latentInfoComponent } from './latent-info.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';
import { ComponentcComponent } from './common/componentc/componentc.component';

import { LatentInfoRoutingModule } from './latent-info-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LatentInfoRoutingModule
  ],
  declarations: [latentInfoComponent,ComponentaComponent, ComponentbComponent, ComponentcComponent]
})
export class LatentInfoModule { }
