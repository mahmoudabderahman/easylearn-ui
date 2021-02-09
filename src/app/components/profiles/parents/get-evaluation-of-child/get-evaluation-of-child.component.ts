/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultService} from '../../../../services/data/studentsResults/result.service';
import {Result} from '../../teachers/evaluate-student/evaluate-student.component';
import {Course} from '../../../course/course-list/course.component';
import {Student} from '../../../student/student-list/student.component';
import {StudentService} from '../../../../services/data/student/student.service';
import {CourseService} from '../../../../services/data/course/course.service';

@Component({
  selector: 'app-get-evaluation-of-child',
  templateUrl: './get-evaluation-of-child.component.html',
  styleUrls: ['./get-evaluation-of-child.component.css']
})
export class GetEvaluationOfChildComponent implements OnInit {

  private result: Result;
  private course: Course;
  private student: Student;

  constructor(private router: ActivatedRoute,
              private pagesRouter: Router,
              private resultService: ResultService,
              private studentService: StudentService,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.resultService.getEvaluationOfStudent(this.router.snapshot.params['studentId'], this.router.snapshot.params['courseId']).subscribe(
      data => {
        this.result = data;
        console.log(data);
      }, error => console.error(error)
    );
    this.courseService.getCourse(this.router.snapshot.params['courseId']).subscribe(
      data => {
        this.course = data;
        console.log(data);
      }, error => console.error(error)
    );
    this.studentService.getStudent(this.router.snapshot.params['studentId']).subscribe(
      data => {
        console.log(data);
        this.student = data;
      }, error => console.error(error)
    );
  }


}
