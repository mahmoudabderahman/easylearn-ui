/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Component, OnInit} from '@angular/core';
import {Appointment} from '../../../appointment/appointment-list/appointment.component';
import {AppointmentService} from '../../../../services/data/appointment/appointment.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-find-appointments-of-astudent-courses',
  templateUrl: './find-appointments-of-astudent-courses.component.html',
  styleUrls: ['./find-appointments-of-astudent-courses.component.css']
})
export class FindAppointmentsOfAStudentCoursesComponent implements OnInit {

  appointments: Appointment[];


  constructor(private appointmentService: AppointmentService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.showAppointmentsOfStudent();
  }

  showAppointmentsOfStudent() {

    this.appointmentService.findAllAppointmentsOfStudentCourses(this.activatedRoute.snapshot.params['id']).subscribe(
      data => {
        this.appointments = data;
      },
      error => console.error(error)
    );
  }
}
