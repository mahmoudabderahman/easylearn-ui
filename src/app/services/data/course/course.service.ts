import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parent} from '../../../components/parent/parent-list/parent.component';
import {Course} from '../../../components/course/course-list/course.component';
import {Appointment} from "../../../components/appointment/appointment-list/appointment.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseId: number;

  constructor(private http: HttpClient) { }

  getCourses():Observable<any>  {
    return this.http.get<Course[]>('/server/api/v1/courses?ideal=false');
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
