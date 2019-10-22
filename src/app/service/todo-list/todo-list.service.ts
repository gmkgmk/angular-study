import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, defer, interval, timer, Subject } from 'rxjs';

@Injectable()
export class TodoListService {
  private todoListUrl = 'http://localhost:3000/api/todoList'; // URL to web api

  constructor(private http: HttpClient) {}

  fetchTodoList(): Observable<any> {
    const url = `${this.todoListUrl}/list`;
    return this.http.get(url);
  }
  removeTodoList(id: number | string): Observable<any> {
    const url = `${this.todoListUrl}/removeList`;
    return this.http.post(url, {
      id
    });
  }
  addTodoList(content: string): Observable<any> {
    const url = `${this.todoListUrl}/add`;
    return this.http.post(url, {
      value: content
    });
  }
}
