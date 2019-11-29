import { Component, OnInit } from '@angular/core';
import {Teacher} from '../teacher-list/teacher.component';
import {TeacherService} from '../../../services/data/teacher/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})
export class TeacherUpdateComponent implements OnInit {

  id: number;
  teacher: Teacher;

  constructor(
    private teacherService: TeacherService,
    private router: ActivatedRoute,
    private pagesRouter: Router
  ) { }

  ngOnInit() {
    this.teacher = new Teacher('', '', '', '');
    this.id = this.router.snapshot.params['id']
    this.teacherService.getTeacher(this.id).subscribe(
      data => this.teacher = data
    );

  }

  saveTeacher() {
    this.teacherService.updateTeacher(this.id, this.teacher)
      .subscribe(
        data => {
          this.pagesRouter.navigate(['teachers']);
        }
      );
  }

}
