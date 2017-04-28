import { Component }   from '@angular/core';

import { LatentService } from './latent.service';

@Component({
  template: `
    <h2>latent根组件</h2>
    <router-outlet></router-outlet>
  `,
  providers: [ LatentService ]
})

export class latentInfoComponent {
  constructor() {
  }
}
