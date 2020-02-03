import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Student} from '../../student/student-list/student.component';
import {AppointmentService} from '../../../services/data/appointment/appointment.service';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import {StudentService} from '../../../services/data/student/student.service';
import {Appointment} from '../appointment-list/appointment.component';
import {MatConfirmDialogService} from '../../../services/util/mat-confirm-dialog.service';
import {BehaviorSubject} from "rxjs";
import { filter, pairwise } from 'rxjs/operators';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
@Component({
  selector: 'app-assign-students-to-appointment',
  templateUrl: './assign-students-to-appointment.component.html',
  styleUrls: ['./assign-students-to-appointment.component.css']
})
export class AssignStudentsToAppointmentComponent implements OnInit {

  form: FormGroup;
  private studentsData: Student[];
  appointmentId: number;
  appointmentStartDate: Date;
  appointmentEndDate: Date;
  appointmentRoom: number;
  students: any;
  student: Student;
  appointment: Appointment;
  public previousRoutePath = new BehaviorSubject<string>('');


  constructor(
    private appointmentService: AppointmentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private dialogService: MatConfirmDialogService,
    private location: Location
  ) {



    this.form = this.formBuilder.group({
      students: new FormArray([])
    });
    this.appointmentId = this.router.snapshot.params['id'];
    this.appointmentService.getAppointment(this.appointmentId).subscribe(
      data => {
        this.appointment = data;
        this.appointmentStartDate = data.startDate;
        this.appointmentEndDate = data.endDate;
        this.appointmentRoom = data.roomNumber;
      }
    );
    this.studentService.getStudentsNotAllocatedToThisAppointment(this.appointmentId).subscribe(
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
    /*
    // ..initial prvious route will be the current path for now
    console.log(this.location.back())
    console.log(this.previousRoutePath.next(this.location.path()));


    // on every route change take the two events of two routes changed(using pairwise)
    // and save the old one in a behavious subject to access it in another component
    // we can use if another component like intro-advertise need the previous route
    // because he need to redirect the user to where he did came from.
    this.pagesRouter.events.pipe(
      filter(e => e instanceof RoutesRecognized),
      pairwise(),
    )
      .subscribe((event: any[]) => {
        console.log(this.previousRoutePath.next(event[0].urlAfterRedirects));
      });
    */
  }

  submit() {
    this.dialogService.openConfirmDialog('Are you sure that you want to assign these students to this appointment?')
      .afterClosed().subscribe(
      res => {
        if (res) {
          const selectedPreferences = this.form.value.students
            .map((checked, index) => checked ? this.studentsData[index].id : null)
            .filter(value => value != null);
          console.log(selectedPreferences.length);
          this.appointmentService.assignStudentsToAppointment(this.appointmentId, selectedPreferences)
            .subscribe(
              data => {
                console.log(data);
                this.location.back();
                //this.pagesRouter.navigate(['../'])
              }
            );
        }
      }
    );

  }
}
