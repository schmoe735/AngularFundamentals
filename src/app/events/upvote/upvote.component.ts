import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i [style.color]="iconColor" class="glyphicon glyphicon-heart"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          {{count}}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() set voted(value) {
    this.iconColor = value ? 'red' : 'white';
  }
  @Input() count: number;
  @Output() vote = new EventEmitter();
  iconColor: string;
  ngOnInit() {
  }

  onClick() {
    this.vote.emit('');
  }
}
