import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './services/tokenStorageService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Easy Learn';
  isLoggedIn = false;
  username: string;
  UserType: string;
  isStudent: boolean;
  isTeacher: boolean;
  isParent: boolean;

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.tokenStorageService.getToken());
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.UserType = user.UserType;

      this.isParent = this.UserType.includes('PARENT');
      this.isStudent = this.UserType.includes('STUDENT');
      this.isTeacher = this.UserType.includes('TEACHER');
      console.log(this.isTeacher);
      console.log(this.isStudent);
      console.log(this.isParent);
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}

