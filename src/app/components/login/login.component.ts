import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  ngOnInit() {
  }
  handleLogin() {
    if (this.auth.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    /*
    (this.loginService.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['user'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true

        }
      )
    );

     */

  }

}
