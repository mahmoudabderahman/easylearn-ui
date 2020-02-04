/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Component, OnInit} from '@angular/core';
import {Course} from '../../../course/course-list/course.component';
import {CourseService} from '../../../../services/data/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-get-courses-of-parents-students',
  templateUrl: './get-courses-of-parents-students.component.html',
  styleUrls: ['./get-courses-of-parents-students.component.css']
})
export class GetCoursesOfParentsStudentsComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.showCoursesOfParentsStudents();
  }

  showCoursesOfParentsStudents() {
    this.courseService.getCoursesOfParentsStudents(this.activatedRoute.snapshot.params['id']).subscribe(
      data => {
        this.courses = data;
      },
      error => console.error(error)
    );
  }

}
