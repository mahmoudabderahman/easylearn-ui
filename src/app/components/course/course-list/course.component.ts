import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/data/course/course.service';
import {Router} from '@angular/router';
import {Appointment} from "../../appointment/appointment-list/appointment.component";

export class Course {
  public id: number;
  appointment: Appointment[];
  constructor(
    public courseCode: string,
    public name: string,
    public grade: number,
    public content: string,
    public description: string,
    ) {}
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[];
  message: string;
  course: Course;
  id: number;

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.refreshCourses();
  }

  refreshCourses() {
    this.courseService.getCourses().subscribe(
      data => {this.courses = data; },
      err => console.error(err),
      () => console.log('Courses loaded')
    );
  }

  createCourse() {
    this.router.navigate(['courses/create']);
  }

  updateCourse(id) {
    this.router.navigate(['courses/edit', id]);
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(
      response => {
        this.message = `Delete of Course with id: ${id} successful`;
        this.refreshCourses();
      }
    );
  }
}
