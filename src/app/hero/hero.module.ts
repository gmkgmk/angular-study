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
  // 组件
  declarations: [DashboardComponent, HeroDetailComponent],
  // 依赖注入的服务
  providers: [HeroService],
  // 系统需要的服务
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
