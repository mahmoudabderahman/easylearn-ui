import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../services/data/student/student.service';
import {Router} from '@angular/router';

export class Student {
  public id: number;
  constructor(
              public firstName: string,
              public lastName: string,
              public email: string,
              public password: string
              ) { }

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
  constructor(private service: StudentService, private router: Router) { }

  ngOnInit() {
    this.refreshStudents();
  }

  refreshStudents() {
    this.service.getStudents().subscribe(
      data => {this.students = data; },
      err => console.error(err),
      () => console.log('Students loaded')
    );
  }

  deleteStudent(id) {
    this.service.deleteStudent(id).subscribe(
      response => {
        this.message = `Delete of Student with ID: ${id} successful`;
        this.refreshStudents();
      }
    );
  }

  updateStudent(id) {
    this.router.navigate(['students/edit', id]);
  }


  createStudent() {
    this.router.navigate(['students/create']);
  }
}
