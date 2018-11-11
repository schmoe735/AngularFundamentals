import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this._router.navigate(['/events']);
  }
}
