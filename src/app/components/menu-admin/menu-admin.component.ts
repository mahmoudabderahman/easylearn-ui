import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {TokenStorageService} from '../../services/tokenStorageService';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentService} from '../../services/data/appointment/appointment.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  id: number;

  constructor(private auth: AuthenticationService,
              private tokenStorage: TokenStorageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isUserLoggedIn = true;
    }
  }

  showAppointmentsOfAStudent(id) {
    this.router.navigate(['appointments/student', id]);
    //this.appointmentService.findAllAppointmentsOfStudentCourses(this.router.snapshot.params['id'])
  }

  showCoursesOfAStudent(id) {
    this.router.navigate(['courses/student', id]);
  }

  showCoursesOfATeacher(id) {
    this.router.navigate(['courses/teacher', id]);
  }

  fillAttendanceList(id) {
    this.router.navigate(['fillAttendanceList', id])
  }
}
