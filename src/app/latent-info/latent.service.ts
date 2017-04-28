import { Injectable } from '@angular/core';

export class Latent {
  constructor(public id: number, public name: string) { }
}

const HEROES: Latent[] = [
  new Latent(11, 'Mr. Nice'),
  new Latent(12, 'Narco'),
  new Latent(13, 'Bombasto'),
  new Latent(14, 'Celeritas'),
  new Latent(15, 'Magneta'),
  new Latent(16, 'RubberMan')
];

const FETCH_LATENCY = 500;

@Injectable()
export class LatentService {

  getHeroes() {
    return new Promise<Latent[]>(resolve => {
      setTimeout(() => { resolve(HEROES); }, FETCH_LATENCY);
    });
  }

  getHero(id: number | string) {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === +id));
  }

}
