import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})


export class EasylearnService {

  constructor(private http: HttpClient) { }

  getTeachers() {
    return this.http.get('/server/api/v1/teachers');
  }

}
