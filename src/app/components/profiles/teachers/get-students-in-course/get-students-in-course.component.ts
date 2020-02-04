/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Student} from '../../../student/student-list/student.component';
import {Course} from '../../../course/course-list/course.component';
import {CourseService} from '../../../../services/data/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../../../services/data/student/student.service';
import {MatConfirmDialogService} from '../../../../services/util/mat-confirm-dialog.service';

@Component({
  selector: 'app-give-result-to-student',
  templateUrl: './get-students-in-course.component.html',
  styleUrls: ['./get-students-in-course.component.css']
})
export class GetStudentsInCourseComponent implements OnInit {

  form: FormGroup;
  private studentsData: Student[];
  students: any;
  student: Student;
  course: Course;
  courseId: number;
  courseCode: string;
  courseGrade: number;
  courseName: string;


  constructor(
    private courseService: CourseService,
    private router: ActivatedRoute,
    private studentService: StudentService,
    private pagesRouter: Router,
    private formBuilder: FormBuilder,
    private dialogService: MatConfirmDialogService
  ) {
    this.form = this.formBuilder.group({
      students: new FormArray([])
    });
    this.courseId = this.router.snapshot.params['courseId'];
    this.courseService.getCourse(this.courseId).subscribe(
      data => {
        this.course = data;
        this.courseCode = data.courseCode;
        this.courseName = data.name;
        this.courseGrade = data.grade;
      }
    );
    this.studentService.getStudentsAllocatedToCourse(this.courseId).subscribe(
      data => {
        this.studentsData = data;
        this.studentsData.forEach((o, i) => {
          const control = new FormControl(i == 0);
          (this.form.controls.students as FormArray).push(control);
        });
      }
    );
  }


  ngOnInit() {

  }

  submit() {
    this.dialogService.openConfirmDialog('Are you sure that you want to evaluate this student?')
      .afterClosed().subscribe(
      res => {
        if (res) {
          const selectedPreferences = this.form.value.students
            .map((checked, index) => checked ? this.studentsData[index].id : null)
            .filter(value => value != null);
          console.log(selectedPreferences.length);
          if (selectedPreferences.length === 0 || selectedPreferences.length > 1) {
            window.alert('Only one Student at a time could be evaluated!');
          } else {
            console.log(selectedPreferences[0].valueOf('id'));
            this.pagesRouter.navigate(['evaluateStudent', this.courseId, selectedPreferences[0].valueOf('id')]);

          }

        }
      }
    );

  }
}
