import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: Http) {

  }

  // Register User
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/users/register', user, {headers: headers})
    .map(res => res.json());
  }

  // Authenticate User
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/users/auth', user, {headers: headers})
    .map(res => res.json());
  }

  // Get User Profile
  getProfile(){
    let headers = new Headers();
    // Loading the token
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:5000/users/profile', {headers: headers})
    .map(res => res.json());
  }


  // Store the User and Token
  storeUserData(token, user){

    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // Cheking for the token if expired or not
  loggedIn(){
    return tokenNotExpired('id_token');
  }

  // Logout
  logout(){
    this.authToken =  null;
    this.user = null;
    localStorage.clear();
  }

  // Load the Token
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


}
