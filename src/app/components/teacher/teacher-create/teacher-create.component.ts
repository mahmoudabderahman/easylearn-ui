import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../../../services/data/teacher/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../../student/student-list/student.component';
import {Teacher} from '../teacher-list/teacher.component';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {

  teacher: Teacher;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(
    private teacherService: TeacherService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
  ) { }

  ngOnInit() {
  }

  createTeacher() {
    this.teacher = new Teacher(this.firstName, this.lastName, this.email, this.password)
    this.teacherService.createTeacher(this.teacher)
      .subscribe(
        data => {
          console.log(data);
          this.pagesRouter.navigate(['teachers'])
        }
      )
  }

}
