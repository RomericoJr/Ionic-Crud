import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  data_profile(){
    const user:any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.access_token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.laravelApi + 'userProfile',{headers:headers});
  }

  logout(){
    const user:any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.access_token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.laravelApi + 'logout',{headers:headers});

  }

  // status(){
  //   const localData : any = localStorage.getItem('user');

  // }
}
