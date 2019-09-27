import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodoListService {
  private todoListUrl = 'http://localhost:3000/api/todoList'; // URL to web api

  constructor(private http: HttpClient) {}
  addTodoList(content: string): Observable<any> {
    const url = `${this.todoListUrl}/add`;
    return this.http.post(url, {
      value: content
    });
  }
}
