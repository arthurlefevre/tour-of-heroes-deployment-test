import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[];
  selectedHero: Hero;

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: heroes => this.heroes = heroes,
    });
  }

}
