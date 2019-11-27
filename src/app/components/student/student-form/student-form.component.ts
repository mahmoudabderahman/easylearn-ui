import { Component, OnInit } from '@angular/core';
import {Student} from '../student-list/student.component';
import {StudentService} from '../../../services/data/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {

  id: number;
  student: Student;
  myform: FormGroup;

  actionButton;

  action = null;

  constructor(
    private studentService: StudentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.student = new Student( '', '', '', '')
    if (this.router.snapshot.params['id'] != -1) {
      this.id = this.router.snapshot.params['id']
      this.studentService.getStudent(this.id).subscribe(
        data => this.student = data
      );
      this.create = true;
    }
    //this.id = this.router.snapshot.params['id'];
    //
    //console.log(this.id)
    /*
    if (this.id != -1) {
      this.studentService.getStudent(this.id).subscribe(
        data => this.student = data
      );
    }
    */
  }

  saveStudent() {
    if (this.create) {
      this.studentService.createStudent(this.student)
        .subscribe(
          data => {
            this.pagesRouter.navigate(['students']);
          }
        );
    } else {
      this.studentService.updateStudent(this.id, this.student)
        .subscribe(
          data => {
            this.pagesRouter.navigate(['students']);
          }
        );
    }
  }
}
