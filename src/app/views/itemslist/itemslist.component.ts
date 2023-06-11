import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css'],
})
export class ItemslistComponent {
  @Input() data: any = [];
}
