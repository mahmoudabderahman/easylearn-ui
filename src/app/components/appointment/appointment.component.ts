import { Component, OnInit } from '@angular/core';
import {EasylearnService} from '../../services/easylearn.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public appointments;

  constructor(private easylearnService: EasylearnService) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.easylearnService.getAppointments().subscribe(
      data => {this.appointments = data; },
      err => console.error(err),
      () => console.log('Appointments loaded')
    );
  }
}
