import { HEROES } from './mock-heroes';
import { Hero } from './types/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor() { }

getHeroes():Observable<Hero[]> {
  return of(HEROES);
}

getHero(id: number): Observable<Hero> {
  return of(HEROES.find(h => h.id === id));
}

}
