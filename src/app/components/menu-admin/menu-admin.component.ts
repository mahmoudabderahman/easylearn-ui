import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

}
