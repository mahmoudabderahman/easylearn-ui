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
        console.log(data)
        this.tokenStorageService.saveToken(data.token);
        this.tokenStorageService.saveUser(data);
        this.invalidLogin = false;
        this.userType = this.tokenStorageService.getUser().UserType;
        console.log(data.userType);
        console.log(this.userType);
        this.router.navigate(['admin']);

      },
      error => {
        this.invalidLogin = true;
      }
    );

  }
}
