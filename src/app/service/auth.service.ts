import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, register } from '../interface/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  laravelApi = 'http://localhost:8000/api/';
  constructor( private http: HttpClient) { }

  login(login: login):Observable<Request>{
    return this.http.post<Request>(this.laravelApi + 'login', login)
  }

  register(register: register):Observable<Request>{
    return this.http.post<Request>(this.laravelApi + 'register', register)
  }

  // status(){
  //   const localData : any = localStorage.getItem('user');

  // }
}
