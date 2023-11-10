import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  stats = [
    { label: 'faves', quantity: 22 },
    { label: 'test', quantity: 50 },
    { label: 'news', quantity: 90 },
  ];

  items = [
    {
      label: $localize`car`,
      image: '/assets/images/car.jpeg',
      description: $localize`A beautiful gray car, would love to have it`,
    },
    {
      label: $localize`bike`,
      image: '/assets/images/bike.jpeg',
      description: $localize`A beautiful gray bike, would love to ride it`,
    },
  ];
}
