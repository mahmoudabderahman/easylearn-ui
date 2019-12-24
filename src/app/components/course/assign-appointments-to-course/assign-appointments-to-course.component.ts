import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Appointment} from "../../appointment/appointment-list/appointment.component";
import {AppointmentService} from "../../../services/data/appointment/appointment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../services/data/course/course.service";
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn} from "@angular/forms";

@Component({
  selector: 'app-assign-appointments-to-course',
  templateUrl: './assign-appointments-to-course.component.html',
  styleUrls: ['./assign-appointments-to-course.component.css']
})
export class AssignAppointmentsToCourseComponent implements OnInit {

  form: FormGroup;
  private appointmentsData: Appointment[];
  courseId: number;
  appointments: any;

  constructor(
    private appointmentService: AppointmentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) {
    this.courseId = this.router.snapshot.params['id'];
    this.appointmentService.getAppointments().subscribe(
      data => {
        this.appointmentsData = data;
        const formControls = this.appointmentsData.map(control => new FormControl(false));
        this.form = this.formBuilder.group({
          appointments: new FormArray(formControls)
        });
      }
    )
    //console.log(this.appointmentsData.length)

  }

  ngOnInit() {
    /*
    this.courseId = this.router.snapshot.params['id'];
    this.appointmentService.getAppointments().subscribe(
      data => {this.appointmentsData = data;}
    )
    this.form = this.formBuilder.group({
        appointments: new FormArray([])
      }
    );

    this.appointmentsData.forEach((o, i) => {
      const control = new FormControl(i === 0);
      (this.form.controls.appointments as FormArray).push(control);
    });
    */
  }

  submit() {

  }

}
