import {Component, OnInit} from '@angular/core';
import {Appointment} from '../../../appointment/appointment-list/appointment.component';
import {AppointmentService} from '../../../../services/data/appointment/appointment.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-get-appointments-of-parent-students',
  templateUrl: './get-appointments-of-parent-students.component.html',
  styleUrls: ['./get-appointments-of-parent-students.component.css']
})
export class GetAppointmentsOfParentStudentsComponent implements OnInit {
  appointments: Appointment[];

  constructor(private appointmentService: AppointmentService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.refreshAppointments();
  }

  refreshAppointments() {
    this.appointmentService.findAllIdealAppointmentsOfStudent(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        data => {
          this.appointments = data;
        },
        error => console.error(error)
      );
  }
}
