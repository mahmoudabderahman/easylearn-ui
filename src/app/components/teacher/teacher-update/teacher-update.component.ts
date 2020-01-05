import { Component, OnInit } from '@angular/core';
import {Teacher} from '../teacher-list/teacher.component';
import {TeacherService} from '../../../services/data/teacher/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatConfirmDialogService} from "../../../services/util/mat-confirm-dialog.service";

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})
export class TeacherUpdateComponent implements OnInit {

  id: number;
  teacher: Teacher;

  constructor(
    private teacherService: TeacherService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private dialogService: MatConfirmDialogService

  ) { }

  ngOnInit() {
    this.teacher = new Teacher('', '', '', '');
    this.id = this.router.snapshot.params['id']
    this.teacherService.getTeacher(this.id).subscribe(
      data => this.teacher = data
    );

  }

  saveTeacher() {
    this.dialogService.openConfirmDialog("Are you sure that you want to save these changes?")
      .afterClosed().subscribe(
      res => {
        if (res) {
          this.teacherService.updateTeacher(this.id, this.teacher)
            .subscribe(
              data => {
                this.pagesRouter.navigate(['teachers']);
              }
            );
        }
      }
    )
  }

}
