/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {Appointment} from '../../../appointment/appointment-list/appointment.component';
import {AppointmentService} from '../../../../services/data/appointment/appointment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatConfirmDialogService} from '../../../../services/util/mat-confirm-dialog.service';

@Component({
  selector: 'app-fill-attendance-list',
  templateUrl: './fill-attendance-list.component.html',
  styleUrls: ['./fill-attendance-list.component.css']
})
export class FillAttendanceListComponent implements OnInit {

  appointments: Appointment[];
  appointment: Appointment;


  constructor(private appointmentService: AppointmentService,
              private router: Router,
              private dialogService: MatConfirmDialogService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.refreshAppointments();
  }

  refreshAppointments() {
    this.appointmentService.getAppointmentsOfTeacherCourses(this.activatedRoute.snapshot.params['id']).subscribe(
      data => {
        this.appointments = data;
      },
      err => console.error(err),
      () => console.log('Appointments loaded')
    );
  }

  assignStudents(id: number) {
    this.router.navigate(['appointments/assignStudentsToAppointment', id]);

  }
}
