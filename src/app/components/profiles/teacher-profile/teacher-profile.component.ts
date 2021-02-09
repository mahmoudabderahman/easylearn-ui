/**
 * @Author: Mahmoud Abdelrahman
 */
import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../services/tokenStorageService';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }

}
