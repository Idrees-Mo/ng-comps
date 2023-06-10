import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data = [
    { name: 'Idrees', age: 30, profession: 'software engineer' },
    { name: 'Azhaan', age: 3, profession: 'trouble2 engineer' },
    { name: 'Hoorain', age: 7, profession: 'trouble engineer' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'profession', label: 'Profession' },
  ];
}
