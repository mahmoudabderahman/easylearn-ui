/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Appointment} from '../../appointment/appointment-list/appointment.component';
import {AppointmentService} from '../../../services/data/appointment/appointment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../../services/data/course/course.service';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {Course} from '../course-list/course.component';
import {MatConfirmDialogService} from '../../../services/util/mat-confirm-dialog.service';

@Component({
  selector: 'app-assign-appointments-to-course',
  templateUrl: './assign-appointments-to-course.component.html',
  styleUrls: ['./assign-appointments-to-course.component.css']
})
export class AssignAppointmentsToCourseComponent implements OnInit {

  form: FormGroup; // = new FormGroup();
  private appointmentsData: Appointment[];
  courseId: number;
  courseName: string;
  appointments: any;
  course: Course;
  courseCode: string;

  constructor(
    private appointmentService: AppointmentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private dialogService: MatConfirmDialogService,
  ) {
    this.form = this.formBuilder.group({
      appointments: new FormArray([])
    });
    this.courseId = this.router.snapshot.params.id;
    this.courseService.getCourse(this.courseId).subscribe(
      data => {
        this.course = data;
        this.courseName = data.name;
        this.courseCode = data.courseCode;
      }
    );
    this.appointmentService.getAppointmentsAllocatedByCourse().subscribe(
      data => {
        this.appointmentsData = data;
        this.appointmentsData.forEach((o, i) => {
          const control = new FormControl(i == 0);
          (this.form.controls.appointments as FormArray).push(control);

        });

      }
    );

  }

  ngOnInit() {
  }

  submit() {

    const selectedPreferences = this.form.value.appointments
      .map((checked, index) => checked ? this.appointmentsData[index].id : null)
      .filter(value => value !== null);
    console.log(selectedPreferences.length);
    this.dialogService.openConfirmDialog('Are you sure that you want to allocate these appointments to this course?')
      .afterClosed().subscribe(
      res => {
        if (res) {
          this.courseService.assignAppointmentsToCourse(this.courseId, selectedPreferences)
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

