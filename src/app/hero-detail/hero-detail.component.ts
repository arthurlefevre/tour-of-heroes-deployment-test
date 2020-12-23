import { HeroService } from './../hero.service';
import { Hero } from './../types/hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  onChange(ev): void {
    this.heroService.updateHeroName({ id: this.hero.id, name: ev.target.value });
  }

  goBack():void {
    this.location.back();
  }

}
