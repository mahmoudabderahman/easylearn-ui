import { Component, OnInit } from '@angular/core';
import { EasylearnService } from '../../services/easylearn.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public teachers;

  constructor(private easylearnService: EasylearnService) { }

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.easylearnService.getTeachers().subscribe(
      data => {this.teachers = data; },
      err => console.error(err),
      () => console.log('Teachers loaded')
    );
  }

}
