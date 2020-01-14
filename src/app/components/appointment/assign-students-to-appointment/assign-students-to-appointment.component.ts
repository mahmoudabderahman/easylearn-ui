import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Student} from "../../student/student-list/student.component";
import {AppointmentService} from "../../../services/data/appointment/appointment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../../services/data/student/student.service";
import {Appointment} from "../appointment-list/appointment.component";
import {MatConfirmDialogService} from "../../../services/util/mat-confirm-dialog.service";

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


  constructor(
    private appointmentService: AppointmentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private dialogService: MatConfirmDialogService
  ) {
    this.form = this.formBuilder.group({
      students: new FormArray([])
    })
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
        this.studentsData.forEach((o, i) =>
        {
          const control = new FormControl(i == 0);
          (this.form.controls.students as FormArray).push(control);
        })
      }
    )
  }

  ngOnInit() {
  }

  submit() {
    this.dialogService.openConfirmDialog("Are you sure that you want to assign these students to this appointment?")
      .afterClosed().subscribe(
        res =>
        {
          if (res) {
            const selectedPreferences = this.form.value.students
              .map((checked, index) => checked? this.studentsData[index].id : null)
              .filter(value => value != null);
            console.log(selectedPreferences.length)
            this.appointmentService.assignStudentsToAppointment(this.appointmentId, selectedPreferences)
              .subscribe(
                data => {
                  console.log(data);
                  this.pagesRouter.navigate(['appointments']);
                }
              )
          }
        }
    )

  }
}
