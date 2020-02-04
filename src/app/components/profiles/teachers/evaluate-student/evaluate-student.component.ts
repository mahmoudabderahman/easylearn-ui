/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatConfirmDialogService} from '../../../../services/util/mat-confirm-dialog.service';
import {ResultService} from '../../../../services/data/studentsResults/result.service';
import {Student} from '../../../student/student-list/student.component';
import {Course} from '../../../course/course-list/course.component';
import {StudentService} from '../../../../services/data/student/student.service';
import {CourseService} from '../../../../services/data/course/course.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

export class Result {
  public id: number;

  constructor(
    public courseId: number,
    public studentId: number,
    public points: any,
    public maxValue: number
  ) {
  }
}

@Component({
  selector: 'app-evaluate-student',
  templateUrl: './evaluate-student.component.html',
  styleUrls: ['./evaluate-student.component.css']
})
export class EvaluateStudentComponent implements OnInit {

  courseId: number;
  studentId: number;
  student: Student;
  course: Course;
  resultPoints: any;
  maxPoints: any;

  constructor(
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private dialogService: MatConfirmDialogService,
    private studentResultService: ResultService,
    private studentService: StudentService,
    private courseService: CourseService,
    private location: Location

  ) {
  }

  ngOnInit() {
    this.studentId = this.router.snapshot.params['studentId'];
    this.courseId = this.router.snapshot.params['courseId'];
    this.studentService.getStudent(this.studentId).subscribe(
      data => {
        this.student = data;
      }, err => console.error(err),
      () => console.log('Student Loaded')
    );

    this.courseService.getCourse(this.courseId).subscribe(
      data => {
        this.course = data;
      }, err => console.error(err),
      () => console.log('Course Loaded')
    );

  }

  evaluateStudent() {
    this.studentResultService.evaluateStudent(new Result(this.courseId, this.studentId, this.resultPoints, this.maxPoints))
      .subscribe(
        data => {
          console.log(data);
          this.location.back();

        }
      );

  }
}
