import { Hero } from './types/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(private firestore: AngularFirestore) {}

getHeroes():Observable<Hero[]> {
  return this.firestore.collection<Hero>('heroes').valueChanges({ idField: 'id' });
}

getHero(id: string): Observable<Hero> {
  return this.firestore.doc<Hero>(`heroes/${id}`).valueChanges({ idField: 'id' });
}

updateHeroName(hero: Hero): void {
  this.firestore.doc<Hero>(`heroes/${hero.id}`).set(hero);
}

}
