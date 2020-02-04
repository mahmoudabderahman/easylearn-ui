/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../services/data/student/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../student-list/student.component';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student;
  firstName: string;
  lastName: string;
  username: string;
  password: string;

  constructor(
    private studentService: StudentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
  ) {
  }

  ngOnInit() {
  }

  createStudent() {
    this.student = new Student(this.firstName, this.lastName, this.username, this.password);
    this.studentService.createStudent(this.student)
      .subscribe(
        data => {
          console.log(data);
          this.pagesRouter.navigate(['students']);
        }
      );
  }
}
