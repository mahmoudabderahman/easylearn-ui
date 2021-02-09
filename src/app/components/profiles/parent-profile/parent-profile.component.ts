/**
 * @Author: Mahmoud Abdelrahman
 */
import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../services/tokenStorageService';

@Component({
  selector: 'app-parent-profile',
  templateUrl: './parent-profile.component.html',
  styleUrls: ['./parent-profile.component.css']
})
export class ParentProfileComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }

}
