/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Student} from '../../student/student-list/student.component';
import {Course} from '../course-list/course.component';
import {CourseService} from '../../../services/data/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../../services/data/student/student.service';
import {MatConfirmDialogService} from '../../../services/util/mat-confirm-dialog.service';

@Component({
  selector: 'app-assign-students-to-course',
  templateUrl: './assign-students-to-course.component.html',
  styleUrls: ['./assign-students-to-course.component.css']
})
export class AssignStudentsToCourseComponent implements OnInit {

  form: FormGroup;
  private studentsData: Student[];
  courseId: number;
  courseCode: string;
  courseGrade: number;
  courseName: string;
  students: any;
  student: Student;
  course: Course;

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
    this.courseId = this.router.snapshot.params['id'];
    this.courseService.getCourse(this.courseId).subscribe(
      data => {
        this.course = data;
        this.courseCode = data.courseCode;
        this.courseName = data.name;
        this.courseGrade = data.grade;
      }
    );
    this.studentService.getStudentsNotAllocatedToThisCourse(this.courseId).subscribe(
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
    this.dialogService.openConfirmDialog('Are you sure that you want to assign these students to this course?')
      .afterClosed().subscribe(
      res => {
        if (res) {
          const selectedPreferences = this.form.value.students
            .map((checked, index) => checked ? this.studentsData[index].id : null)
            .filter(value => value != null);
          console.log(selectedPreferences.length);
          this.courseService.assignStudentsToCourse(this.courseId, selectedPreferences)
            .subscribe(
              data => {
                console.log(data);
                this.pagesRouter.navigate(['courses']);
              }
            );
        }
      }
    );

  }
}
