import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../../../services/data/teacher/teacher.service';
import {Router} from '@angular/router';
import {MatConfirmDialogService} from "../../../services/util/mat-confirm-dialog.service";

export class Teacher {
  public id: number;
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) { }
}

@Component({
  selector: 'app-admin',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public teachers: Teacher[];
  message: string;
  teacher: Teacher;

  constructor(private teacherService: TeacherService, private router: Router, private dialogService: MatConfirmDialogService) { }

  ngOnInit() {
    this.refreshTeachers();
  }

  refreshTeachers() {
    this.teacherService.getTeachers().subscribe(
      data => {this.teachers = data; },
      err => console.error(err),
      () => console.log('Teachers loaded')
    );
  }

  deleteTeacher(id) {
    this.dialogService.openConfirmDialog("Are you sure that you want to delete this teacher?")
      .afterClosed().subscribe(res =>
    {
      console.log(res)
      if (res) {
        this.teacherService.deleteTeacher(id).subscribe(
          response => {
            this.message = `Delete of Teacher with ID: ${id} successful`;
            this.refreshTeachers();
          }
        );
      }
    })

  }

  updateTeacher(id) {
    this.router.navigate(['teachers/edit', id]);
  }

  createTeacher() {
    this.router.navigate(['teachers/create']);
  }

}
