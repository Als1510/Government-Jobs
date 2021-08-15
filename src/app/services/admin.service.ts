import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Job, Education, Post, Description} from '../helpers/class'

const AUTH_API = 'http://localhost:4000/api';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  setJobs(data: Job): Observable<any> {
    return this.http.post(AUTH_API+'/jobs',data, httpOptions);
  }

  setEducation(data: Education): Observable<any>{
    return this.http.post(AUTH_API+'/education', data, httpOptions);
  }

  setPosts(data: Post): Observable<any>{
    return this.http.post(AUTH_API+'/post', data, httpOptions);
  }

  setDescription(data): Observable<any>{
    return this.http.post(AUTH_API+'/description',{data}, httpOptions);
  }
}