import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos-home',
  templateUrl: './todos-home.component.html',
  styleUrls: ['./todos-home.component.css'],
})
export class TodosHomeComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  todos: any = [];
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
    this.subs.add(
      this.todosService.todosUpdated.subscribe(() => {
        this.todos = this.todosService.getTodos();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
