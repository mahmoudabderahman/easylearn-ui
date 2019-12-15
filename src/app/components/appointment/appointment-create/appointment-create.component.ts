import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../../../services/data/appointment/appointment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Appointment} from "../appointment-list/appointment.component";

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  appointment: Appointment;
  startDate: Date = new Date();
  endDate: Date = new Date();
  roomNumber: number;


  constructor(
    private appointmentService: AppointmentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
  ) { }

  ngOnInit() {
  }

  createAppointment() {
    this.appointment = new Appointment(this.startDate, this.endDate, this.roomNumber);
    this.appointmentService.createAppointment(this.appointment)
      .subscribe(
        data => {
          this.pagesRouter.navigate(['appointments'])
        }
      )
  }
}
