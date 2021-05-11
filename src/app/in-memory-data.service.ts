import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', age: 22, gender: 'Male', mobile: 9898332654 },
      { id: 12, name: 'Narco', age: 29, gender: 'Male', mobile: 9898662654  },
      { id: 13, name: 'Bombasto', age: 47, gender: 'Female', mobile: 9358932654  },
      { id: 14, name: 'Celeritas', age: 15, gender: 'Male', mobile: 9353324145 },
      { id: 15, name: 'Magneta', age: 47, gender: 'Female', mobile: 9312349254 },
      { id: 16, name: 'RubberMan', age: 47, gender: 'Others', mobile: 9358932654 },
      { id: 17, name: 'Dynama', age: 18, gender: 'Male', mobile: 8888888654 },
      { id: 18, name: 'Dr IQ', age: 27, gender: 'Male', mobile: 96666662654 },
      { id: 19, name: 'Magma', age: 83, gender: 'Female', mobile: 239532995354 },
      { id: 20, name: 'Tornado', age: 15, gender: 'Male', mobile: 9236972654 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
