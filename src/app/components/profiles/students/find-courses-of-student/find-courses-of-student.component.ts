import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../../course/course-list/course.component';
import {CourseService} from '../../../../services/data/course/course.service';

@Component({
  selector: 'app-find-courses-of-student',
  templateUrl: './find-courses-of-student.component.html',
  styleUrls: ['./find-courses-of-student.component.css']
})
export class FindCoursesOfStudentComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService, private router: Router, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.showCoursesOfStudent();
  }

  showCoursesOfStudent() {

    this.courseService.getCoursesOfStudent(this.activatedRoute.snapshot.params['id']).subscribe(
      data => {
        this.courses = data;
      },
      error => console.error(error)
    );
  }
}
