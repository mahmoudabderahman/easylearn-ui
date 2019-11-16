import { Component, OnInit } from '@angular/core';
import {EasylearnService} from '../../services/easylearn.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students;

  constructor(private easylearnService: EasylearnService) { }

  ngOnInit() {
    this.getStudents();
  }

  private getStudents() {
    this.easylearnService.getStudents().subscribe(
      data => {this.students = data; },
      err => console.error(err),
      () => console.log('Students loaded')
    );
  }
}
