import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { OrderModule } from './order/order.module';
import { HeroModule } from './hero/hero.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';

registerLocaleData(zh);
@NgModule({
  // 跟模块的组件
  declarations: [AppComponent, MessagesComponent],
  imports: [
    // 根模块依赖
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // 子模块
    OrderModule,
    HeroModule,
    TodoListModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  // 根组建独有
  bootstrap: [AppComponent]
})
export class AppModule {}
