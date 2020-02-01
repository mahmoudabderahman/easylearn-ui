import {Component, OnInit} from '@angular/core';
import {Course} from '../course-list/course.component';
import {CourseService} from '../../../services/data/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Grade} from '../course-update/grade';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  course: Course;
  courseCode: string;
  name: string;
  grades: Grade[] = [
    {id: 1, name: 1},
    {id: 2, name: 2},
    {id: 3, name: 3},
    {id: 4, name: 4},
    {id: 5, name: 5},
    {id: 6, name: 6},
    {id: 7, name: 7},
    {id: 8, name: 8},
  ];
  grade: number = 1;
  content: string;
  description: string;

  constructor(
    private courseService: CourseService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
  ) {
  }

  ngOnInit() {
  }

  createCourse() {
    this.course = new Course(this.courseCode, this.name, this.grade, this.content, this.description);
    this.courseService.createCourse(this.course)
      .subscribe(
        data => {
          this.pagesRouter.navigate(['courses']);
        }
      );
  }
}
