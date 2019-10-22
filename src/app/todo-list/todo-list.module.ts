import { TodoListService } from './../service/todo-list/todo-list.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  MenuFoldOutline,
  TeamOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';
import { ListComponent } from './list/list.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const icons: IconDefinition[] = [MenuFoldOutline, TeamOutline, UserOutline];
@NgModule({
  declarations: [TodoListComponent, ListComponent, AddModalComponent],
  providers: [TodoListService, { provide: NZ_ICONS, useValue: icons }],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TodoListModule {}
