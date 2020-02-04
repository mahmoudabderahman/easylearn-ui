/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Teacher} from '../../../components/teacher/teacher-list/teacher.component';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) {
  }

  getTeachers() {
    return this.http.get<Teacher[]>('/server/api/v1/teachers');
  }

  deleteTeacher(id) {
    return this.http.delete(`/server/api/v1/teachers/${id}`);
  }

  getTeacher(id) {
    return this.http.get<Teacher>(`/server/api/v1/teachers/${id}`);

  }

  createTeacher(teacher) {
    return this.http.post(`/server/api/v1/teachers`, teacher);
  }

  updateTeacher(id: number, teacher: Teacher) {
    return this.http.put(`/server/api/v1/teachers/${id}`, teacher);
  }

  assignCoursesToTeacher(id: number, courseIds: []) {
    return this.http.post(`/server/api/v1/teachers/${id}/courses`, courseIds);

  }
}
