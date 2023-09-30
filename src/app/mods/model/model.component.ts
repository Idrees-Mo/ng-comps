import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // To render the modal correctly
    document.body.appendChild(this.el.nativeElement);
  }
}
