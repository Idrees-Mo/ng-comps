import { Component } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  form = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.warn(this.form.getRawValue());
  }
}
