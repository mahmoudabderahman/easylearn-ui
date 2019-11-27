import { Component, OnInit } from '@angular/core';
import { EasylearnService } from 'src/app/services/data/easylearn.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users;

  constructor(private easylearnService: EasylearnService) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers() {
    this.easylearnService.getUsers().subscribe(

      data => {
        this.users = data;

        },
      err => console.error(err),
      () => console.log('Users loaded')
    );
    }

}
