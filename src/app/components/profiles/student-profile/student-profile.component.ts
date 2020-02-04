/**
 * @Author: Mahmoud Abdelrahman, Steve Titinang
 */
import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../services/tokenStorageService';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }

}
