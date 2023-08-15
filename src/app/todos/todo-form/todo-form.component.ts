import { Component } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  form = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodosService
  ) {
    // this.form = new FormGroup({
    //   title: new FormControl(['', Validators.required]),
    // });
  }

  onSubmit(): void {
    this.todoService.addTodo(this.form.getRawValue().title);
  }
}
