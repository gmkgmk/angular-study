import { HeroService } from './hero.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroRoutingModule } from './hero-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [DashboardComponent, HeroDetailComponent],
  providers: [HeroService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      delay: 500
    })
  ]
})
export class HeroModule {}
