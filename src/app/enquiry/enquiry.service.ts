import { Injectable } from '@angular/core';

export class Enquiry {
  constructor(public id: number, public name: string) { }
}

const CRISES: Enquiry[] = [
  new Enquiry(1, 'Dragon Burning Cities'),
  new Enquiry(2, 'Sky Rains Great White Sharks'),
  new Enquiry(3, 'Giant Asteroid Heading For Earth'),
  new Enquiry(4, 'Procrastinators Meeting Delayed Again'),
];

const FETCH_LATENCY = 500;

@Injectable()
export class EnquiryService {

  getCrises() {
    return new Promise<Enquiry[]>(resolve => {
      setTimeout(() => { resolve(CRISES); }, FETCH_LATENCY);
    });
  }

  getCrisis(id: number | string) {
    return this.getCrises()
      .then(heroes => heroes.find(hero => hero.id === +id));
  }

}
