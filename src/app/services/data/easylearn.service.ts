import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  getStudents() {
    return this.http.get('/server/api/v1/students');
  }

  getAppointments() {
    return this.http.get('/server/api/v1/appointments');
  }

  getParents() {
    return this.http.get('/server/api/v1/parents');
  }

  getCourses() {
    return this.http.get('/server/api/v1/courses');
  }

  getUsers() {
    return this.http.get('/server/api/v1/users');
  }


}
