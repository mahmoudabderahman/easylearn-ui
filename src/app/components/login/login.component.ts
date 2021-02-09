/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {TokenStorageService} from '../../services/tokenStorageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService, private tokenStorageService: TokenStorageService) {
  }

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  userType: string;
  id: number;

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.invalidLogin = false;
      this.userType = this.tokenStorageService.getUser().UserType;

    }
  }

  checkLogin() {
    this.auth.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data.token);
        console.log(data);
        this.tokenStorageService.saveToken(data.token);
        this.tokenStorageService.saveUser(data);
        this.invalidLogin = false;
        this.userType = data.userType;
        this.id = data.id;

        if (this.userType === 'STUDENT') {
          console.log('Inside if');
          this.router.navigate(['students/profile', this.id]);
        } else if (this.userType === 'ADMIN') {
          this.router.navigate(['admin']);
        } else if (this.userType === 'TEACHER') {
          this.router.navigate(['teachers/profile', this.id]);
        } else if (this.userType === 'PARENT') {
          this.router.navigate(['parents/profile', this.id]);
        }


      },
      error => {
        this.invalidLogin = true;
      }
    );

  }
}
