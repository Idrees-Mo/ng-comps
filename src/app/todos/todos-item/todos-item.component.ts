import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent {
  @Input() todo: any;
}
