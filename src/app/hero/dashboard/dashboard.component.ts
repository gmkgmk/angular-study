import { Subject } from 'rxjs';
import { HeroService } from './../hero.service';
import { Hero } from '../../type/hero';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nameControl = new FormControl('');
  heroList: Hero[];
  remove$ = new Subject<Hero>();

  constructor(private heroService: HeroService) {}

  remove(hero: Hero) {
    this.heroService.delete(hero.id).subscribe(() => this.getHeros());
  }
  ngOnInit() {
    this.getHeros();
    this.remove$
      .pipe(debounceTime(300))
      .subscribe((hero: Hero) => this.remove(hero));
  }
  getHeros() {
    this.heroService.getHeros().subscribe(heros => (this.heroList = heros));
  }
  insert(): void {
    const value = this.nameControl.value;
    this.heroService.addHero({ name: value } as Hero).subscribe(() => {
      this.getHeros();
      this.nameControl.setValue('');
    });
  }
}
