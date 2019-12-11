import { Component, OnInit } from '@angular/core';
import {EasylearnService} from '../../../services/data/easylearn.service';
import {AppointmentService} from '../../../services/data/appointment/appointment.service';
import {Router} from '@angular/router';

export class Appointment {
  public id: number;
  constructor(
    public startDate: Date,
    public endDate: Date,
    public roomNumber: number
  ) {}
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments: Appointment[];
  message: string;
  appointment: Appointment;

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit() {
    this.refreshAppointments();
  }

  refreshAppointments() {
    this.appointmentService.getAppointments().subscribe(
      data => {this.appointments = data; },
      err => console.error(err),
      () => console.log('Appointments loaded')
    );
  }

  deleteAppointment(id) {
    this.appointmentService.deleteAppointment(id).subscribe(
      response => {
        this.message = `Delete of Appointment with ID: ${id} successful`;
        this.refreshAppointments();
      }
    );
  }

  updateAppointment(id) {
    this.router.navigate(['appointments', id]);
  }

  createAppointment() {
    this.router.navigate(['appointments/create']);
  }
}
