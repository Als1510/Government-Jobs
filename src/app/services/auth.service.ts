import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from '../helpers/class'

const AUTH_API = 'http://localhost:4000/api'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(data: Login): Observable<any>{
    return this.http.post(AUTH_API+'/auth', data, httpOptions);
  }
}
