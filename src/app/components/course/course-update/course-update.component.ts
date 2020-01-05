import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/data/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../course-list/course.component';
import {Grade} from './grade';
import {MatConfirmDialogService} from "../../../services/util/mat-confirm-dialog.service";

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {

  id: number;
  courseCode: string;
  name: string;
  grades: Grade[] = [
    {id: 1, name: 1},
    {id: 2, name: 2},
    {id: 3, name: 3},
    {id: 4, name: 4},
    {id: 5, name: 5},
    {id: 6, name: 6},
    {id: 7, name: 7},
    {id: 8, name: 8},
  ]
  grade: number;
  currentGrade: number;
  content: string;
  description: string;
  course: Course;


  constructor(
    private courseService: CourseService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private dialogService: MatConfirmDialogService
  ) { }

  ngOnInit() {
    this.course = new Course('', '', 1, '', '');
    this.id = this.router.snapshot.params['id'];

    console.log(this.courseCode)
    this.courseService.getCourse(this.id).subscribe(
      data => { this.course = data;  this.currentGrade = data.grade;}
    );

  }

  saveCourse() {
    this.dialogService.openConfirmDialog("Are you sure that you want to save these changes?")
      .afterClosed().subscribe(
      res => {
        if (res) {
          this.courseService.updateCourse(this.id, this.course)
            .subscribe(
              data => {
                this.pagesRouter.navigate(['courses']);
              }
            );
        }
      }
    )

  }

}
