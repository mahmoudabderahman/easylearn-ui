import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parent} from '../../../components/parent/parent-list/parent.component';
import {Course} from '../../../components/course/course-list/course.component';
import {Appointment} from "../../../components/appointment/appointment-list/appointment.component";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseId: number;

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Course[]>('/server/api/v1/courses');
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
    this.courseId = id;
    return this.http.put(`/server/api/v1/courses/${id}`, course);
  }

  assignAppointmentsToCourse(id: number, appointmentIds: Appointment[]) {
    this.courseId = id;
    return this.http.post(`/server/api/v1/courses/${id}/appointments`, appointmentIds);
  }
}
