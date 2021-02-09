/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {TokenStorageService} from '../../services/tokenStorageService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
  }

  showCoursesOfAStudent(id) {
    this.router.navigate(['courses/student', id]);
  }

  showCoursesOfATeacher(id) {
    this.router.navigate(['courses/teacher', id]);
  }

  fillAttendanceList(id) {
    this.router.navigate(['fillAttendanceList', id]);
  }

  showChilderenOfParent(id) {
    this.router.navigate(['students/parent', id]);

  }



}
