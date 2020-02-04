/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../../../services/data/teacher/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  username: string;
  password: string;

  constructor(
    private teacherService: TeacherService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
  ) {
  }

  ngOnInit() {
  }

  createTeacher() {
    this.teacher = new Teacher(this.firstName, this.lastName, this.username, this.password);
    this.teacherService.createTeacher(this.teacher)
      .subscribe(
        data => {
          console.log(data);
          this.pagesRouter.navigate(['teachers']);
        }
      );
  }

}
