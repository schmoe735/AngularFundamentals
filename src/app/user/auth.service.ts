import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  constructor(private _http: HttpClient) { }

  loginUser(userName: string, password: string) {
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const loginInfo = {username: userName, password: password};
    return this._http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
    // this.currentUser = {
    //   id: 1,
    //   firstName: 'John',
    //   lastName: 'Papa',
    //   userName: userName
    // };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this._http.get('/api/currentIdentity')
      // .subscribe(data => {
      //   if (data instanceof Object) {
      //     this.currentUser = <IUser> data;
      //   }
      // });
      .pipe(tap(data => {
          if (data instanceof Object) {
            this.currentUser = <IUser> data;
          }
        })).subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.currentUser.firstName = firstName;
    return this._http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    // this.currentUser.firstName = firstName;
    // this.currentUser.lastName = lastName;
  }

  logout() {
    this.currentUser = undefined;
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this._http.post('/api/logout', {}, options);
  }
}
