import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styles: []
})
export class CollapsibleWellComponent implements OnInit {
  visible: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.visible = !this.visible;
  }

}
