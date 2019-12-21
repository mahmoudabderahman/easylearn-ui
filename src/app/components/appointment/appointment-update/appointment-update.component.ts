import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../../../services/data/appointment/appointment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Appointment} from "../appointment-list/appointment.component";

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.css']
})
export class AppointmentUpdateComponent implements OnInit {

  id: number;
  startDate: Date;
  endDate: Date;
  roomNumber: number;
  appointment: Appointment;
  constructor(
    private appointmentService: AppointmentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
  ) { }

  ngOnInit() {
    this.appointment = new Appointment(new Date(), new Date(), 0);
    this.id = this.router.snapshot.params['id'];
    //console.log(this.id)

    this.appointmentService.getAppointment(this.id).subscribe(
      data => {
        this.appointment = data;}
    )

  }

  saveAppointment() {
    this.appointmentService.updateAppointment(this.id, this.appointment)
      .subscribe(
        data => {
          this.pagesRouter.navigate(['appointments']);
        }
      )
  }

}
