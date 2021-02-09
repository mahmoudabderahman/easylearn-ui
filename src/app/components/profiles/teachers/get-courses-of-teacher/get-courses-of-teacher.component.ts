/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {Course} from '../../../course/course-list/course.component';
import {CourseService} from '../../../../services/data/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-get-courses-of-teacher',
  templateUrl: './get-courses-of-teacher.component.html',
  styleUrls: ['./get-courses-of-teacher.component.css']
})
export class GetCoursesOfTeacherComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCoursesOfTeacher();
  }

  getCoursesOfTeacher() {
    this.courseService.getCoursesOfTeacher(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        data => {
          this.courses = data;
        }, error => console.error(error)
      );
  }

  uploadContent(id) {
    this.router.navigate(['uploadDocument', id]);
  }

  evaluateStudents(id) {
    this.router.navigate(['getStudentsInCourse', id]);
  }
}
