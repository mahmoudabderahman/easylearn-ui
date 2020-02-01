import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Course} from '../../course/course-list/course.component';
import {Teacher} from '../teacher-list/teacher.component';
import {TeacherService} from '../../../services/data/teacher/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../../services/data/course/course.service';
import {MatConfirmDialogService} from '../../../services/util/mat-confirm-dialog.service';

@Component({
  selector: 'app-assign-teacher-to-course',
  templateUrl: './assign-courses-to-teacher.component.html',
  styleUrls: ['./assign-courses-to-teacher.component.css']
})
export class AssignCoursesToTeacherComponent implements OnInit {

  form: FormGroup;
  private coursesData: Course[];
  teacherId: number;
  teacherFirstName: string;
  teacherLastName: string;
  courses: any;
  teacher: Teacher;

  constructor(
    private teacherService: TeacherService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private dialogService: MatConfirmDialogService
  ) {
    this.form = this.formBuilder.group({
      courses: new FormArray([])
    });
    this.teacherId = this.router.snapshot.params['id'];
    this.teacherService.getTeacher(this.teacherId).subscribe(
      data => {
        this.teacher = data;
        this.teacherFirstName = data.firstName;
        this.teacherLastName = data.lastName;
      }
    );
    this.courseService.getCoursesNotAllocatedToTeacher().subscribe(
      data => {
        this.coursesData = data;
        this.coursesData.forEach((o, i) => {
          const control = new FormControl(i == 0);
          (this.form.controls.courses as FormArray).push(control);
        });
      }
    );
  }

  ngOnInit() {
  }

  submit() {
    this.dialogService.openConfirmDialog('Are you sure that you want to assign these courses to this teacher?')
      .afterClosed().subscribe(
      res => {
        if (res) {
          const selectedPreferences = this.form.value.courses
            .map((checked, index) => checked ? this.coursesData[index].id : null)
            .filter(value => value != null);
          console.log(selectedPreferences.length);
          this.teacherService.assignCoursesToTeacher(this.teacherId, selectedPreferences)
            .subscribe(
              data => {
                console.log(data);
                this.pagesRouter.navigate(['teachers']);
              }
            );
        }
      }
    );

  }
}
