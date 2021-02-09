/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/tokenStorageService';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
  }

}
