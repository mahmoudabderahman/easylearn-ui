import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/data/course/course.service';
import {Router} from '@angular/router';
import {Appointment} from "../../appointment/appointment-list/appointment.component";
import {MatConfirmDialogService} from "../../../services/util/mat-confirm-dialog.service";

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
  public popoverTitle: string = 'Confirmation';
  public popoverMessage: string = 'Are you sure, that you want to delete this course?';
  public confirmationClicked;
  public cancelClicked;

  constructor(private courseService: CourseService, private router: Router, private dialogService: MatConfirmDialogService) { }

  ngOnInit() {
    this.refreshCourses();
    this.confirmationClicked = false;
    this.cancelClicked = false;
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
    //this.dialogService.openConfirmDialog();
      this.dialogService.openConfirmDialog("Are you sure that you want to delete this course?");
      /*
      this.courseService.deleteCourse(id).subscribe(
        response => {
          this.message = `Delete of Course with id: ${id} successful`;
          this.refreshCourses();
        }
      );
*/

  }

  assignAppointments(id: number) {
    this.router.navigate(['courses/assignAppointmentsToCourse', id])
  }
}
