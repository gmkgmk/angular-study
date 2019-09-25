import { MessageBoxService } from '../message-box.service';
import { Hero } from '../type/hero';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroList'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageBoxService: MessageBoxService
  ) {}
  getHeros(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap(() => this.log('fetch list')));
  }
  getHeroById(id: number) {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get<Hero>(url)
      .pipe(tap(() => this.log(`fetched hero id=${id}`)));
  }
  updateHero(hero: Hero) {
    return this.http
      .put(this.heroesUrl, hero)
      .pipe(tap(() => this.log(`update hero name ${hero.name}`)));
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(tap(() => this.log(`add hero name ${hero.name}`)));
  }
  delete(id: number) {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url).pipe(tap(() => this.log(`delete id = ${id}`)));
  }
  log(message: string) {
    this.messageBoxService.add(message);
  }
}
