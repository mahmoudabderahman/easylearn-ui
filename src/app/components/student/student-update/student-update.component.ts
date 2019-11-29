import { Component, OnInit } from '@angular/core';
import {Student} from '../student-list/student.component';
import {StudentService} from '../../../services/data/student/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})

export class StudentUpdateComponent implements OnInit {

  id: number;
  student: Student;


  constructor(
    private studentService: StudentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
  ) { }

  ngOnInit() {
    this.student = new Student( '', '', '', '')
    this.id = this.router.snapshot.params['id']
    this.studentService.getStudent(this.id).subscribe(
      data => this.student = data
    );

  }

  saveStudent() {

    this.studentService.updateStudent(this.id, this.student)
      .subscribe(
        data => {
          this.pagesRouter.navigate(['students']);
        }
      );
  }

}
