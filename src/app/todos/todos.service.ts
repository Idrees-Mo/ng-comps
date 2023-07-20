import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = [
    { id: 1, title: 'todo one', done: false },
    { id: 2, title: 'todo two', done: true },
    { id: 3, title: 'todo three', done: false },
  ];

  getTodos() {
    return [...this.todos];
  }
}
