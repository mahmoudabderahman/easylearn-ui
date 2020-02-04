/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {TokenStorageService} from '../../services/tokenStorageService';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthenticationService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.tokenStorageService.signOut();
  }

}
