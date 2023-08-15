import { Component } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  form = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
    // this.form = new FormGroup({
    //   title: new FormControl(['', Validators.required]),
    // });
  }

  onSubmit(): void {
    console.log('hello');
    console.warn(this.form.getRawValue());
  }
}
