import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
  }


}
