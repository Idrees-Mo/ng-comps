import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-home',
  templateUrl: './todos-home.component.html',
  styleUrls: ['./todos-home.component.css'],
})
export class TodosHomeComponent implements OnInit {
  todos: any = [];
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
    console.log(this.todosService.getTodos());
  }
}
