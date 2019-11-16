import { Component, OnInit } from '@angular/core';
import {EasylearnService} from '../../services/easylearn.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public courses;

  constructor(private easylearnService: EasylearnService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.easylearnService.getCourses().subscribe(
      data => {this.courses = data; },
      err => console.error(err),
      () => console.log('Courses loaded')
    );
  }
}
