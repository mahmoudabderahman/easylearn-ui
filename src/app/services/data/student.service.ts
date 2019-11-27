import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../components/student/student-list/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<Student[]>('/server/api/v1/students');
  }

  deleteStudent(id) {
    return this.http.delete(`/server/api/v1/students/${id}`);
  }

  getStudent(id) {
    return this.http.get<Student>(`/server/api/v1/students/${id}`);

  }

  createStudent(student) {
    return this.http.post(`/server/api/v1/students`, student);
  }

  updateStudent(id: number, student: Student) {
    return this.http.put(`/server/api/v1/students/${id}`, student);
  }
}
