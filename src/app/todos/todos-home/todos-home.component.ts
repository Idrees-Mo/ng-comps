import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-home',
  templateUrl: './todos-home.component.html',
  styleUrls: ['./todos-home.component.css'],
})
export class TodosHomeComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    console.log(this.todosService.getTodos());
  }
}
