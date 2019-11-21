import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;
  invalidLogin = false;
  ngOnInit() {
  }
  checkLogin() {
    if (this.username === 'user' && this.password === '123') {
      this.router.navigate(['user']);
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
