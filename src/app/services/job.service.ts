import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:4000/api';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class JobService {
  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get(AUTH_API+'/jobs', httpOptions);
  }

  getEducation(id): Observable<any>{
    return this.http.post(AUTH_API+`/education/${id}`, httpOptions);
  }

  getPosts(id): Observable<any>{
    return this.http.post(AUTH_API+`/post/${id}`, httpOptions);
  }

  getDescription(id): Observable<any>{
    return this.http.post(AUTH_API+`/description/${id}`, httpOptions);
  }

  jobAlert(data): Observable<any>{
    return this.http.post(AUTH_API+'/jobalert', data,httpOptions);
  }
}
