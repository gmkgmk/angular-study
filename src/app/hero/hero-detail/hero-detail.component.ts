import { HeroService } from './../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../type/hero';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private router: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => {
      this.goBack();
    });
  }
  getHero(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.heroService.getHeroById(id).subscribe(hero => (this.hero = hero));
  }
}
