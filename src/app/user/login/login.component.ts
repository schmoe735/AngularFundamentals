import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
  `]
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this._authService.loginUser(formValues.userName, formValues.password);
    this._router.navigate(['/events']);
  }

  cancel() {
    this._router.navigate(['/events']);
  }

}
