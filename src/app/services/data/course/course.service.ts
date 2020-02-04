import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../../../components/course/course-list/course.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseId: number;

  constructor(private http: HttpClient) {
  }

  getCourses() {
    return this.http.get<Course[]>('/server/api/v1/courses?ideal=false');
  }

  getCoursesOfStudent(id) {
    return this.http.get<Course[]>(`/server/api/v1/courses?studentId=${id}`);
  }

  getCoursesOfTeacher(id) {
    return this.http.get<Course[]>(`/server/api/v1/courses?teacherId=${id}`);
  }

  getCoursesOfParentsStudents(id) {
    return this.http.get<Course[]>(`/server/api/v1/courses?parentId=${id}`);
  }

  getCoursesNotAllocatedToTeacher() {
    return this.http.get<Course[]>('/server/api/v1/courses?ideal=true');
  }


  deleteCourse(id) {
    this.courseId = id;
    return this.http.delete(`/server/api/v1/courses/${id}`);

  }

  getCourse(id) {
    this.courseId = id;
    return this.http.get<Course>(`/server/api/v1/courses/${id}`);

  }

  createCourse(course) {
    return this.http.post(`/server/api/v1/courses`, course);
  }

  updateCourse(id: number, course: Course) {
    return this.http.put(`/server/api/v1/courses/${id}`, course);
  }

  assignAppointmentsToCourse(id: number, appointmentIds: []) {
    return this.http.post(`/server/api/v1/courses/${id}/appointments`, appointmentIds);
  }

  assignStudentsToCourse(id: number, studentIds: []) {
    return this.http.post(`/server/api/v1/courses/${id}/students`, studentIds);
  }


}
