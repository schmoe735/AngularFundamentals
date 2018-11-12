import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../shared';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  level: FormControl;
  presenter: FormControl;
  duration: FormControl;
  abstract: FormControl;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar', 'baz'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  private restrictedWords(words) {
    return (control: FormControl): {[key: string]: any} => {
      if (!words) {
        return null;
      }

      const invalidWords = words
        .map(w => control.value.includes(w) ? w : null)
        .filter(w => w != null);

      return invalidWords && invalidWords.length
        ? {'restrictedWords': invalidWords.join(', ')}
        : null;
    };
  }

  saveSession(sessionForm) {
    const session: ISession = {
      id: undefined,
      name: sessionForm.name,
      presenter: sessionForm.presenter,
      duration: +sessionForm.duration,
      level: sessionForm.level,
      abstract: sessionForm.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

}
