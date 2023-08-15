import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosUpdated = new Subject();
  todos = [
    { id: 1, title: 'todo one', done: false },
    { id: 2, title: 'todo two', done: true },
    { id: 3, title: 'todo three', done: false },
  ];

  getTodos() {
    return [...this.todos];
  }

  addTodo(todo: string) {
    const newtodo = {
      title: todo,
      id: this.todos.length + 1,
      done: false,
    };
    this.todos = [...this.todos, newtodo];

    this.todosUpdated.next(null);
  }
}
