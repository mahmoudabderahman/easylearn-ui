/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../services/data/student/student.service';
import {Router} from '@angular/router';
import {MatConfirmDialogService} from '../../../services/util/mat-confirm-dialog.service';

export class Student {
  public id: number;

  constructor(
    public firstName: string,
    public lastName: string,
    public username: string,
    public password: string
  ) {
  }

}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];
  message: string;
  student: Student;

  constructor(private service: StudentService, private router: Router, private dialogService: MatConfirmDialogService) {
  }

  ngOnInit() {
    this.refreshStudents();
  }

  refreshStudents() {
    this.service.getStudents().subscribe(
      data => {
        this.students = data;
      },
      err => console.error(err),
      () => console.log('Students loaded')
    );
  }

  deleteStudent(id) {
    this.dialogService.openConfirmDialog('Are you sure that you want to delete this student?')
      .afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.service.deleteStudent(id).subscribe(
          response => {
            this.message = `Delete of Student with ID: ${id} successful`;
            this.refreshStudents();
          }
        );
      }
    });
  }

  updateStudent(id) {
    this.router.navigate(['students/edit', id]);
  }


  createStudent() {
    this.router.navigate(['students/create']);
  }
}
