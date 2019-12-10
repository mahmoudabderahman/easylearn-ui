import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Parent, ParentType} from '../parent-list/parent.component';
import {ParentService} from '../../../services/data/parent/parent.service';

@Component({
  selector: 'app-parent-create',
  templateUrl: './parent-create.component.html',
  styleUrls: ['./parent-create.component.css']
})
export class ParentCreateComponent implements OnInit {

  parent: Parent;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: ParentType = ParentType.FATHER;

  constructor(
    private parentService: ParentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
  ) { }

  ngOnInit() {
  }



  createParent() {
    this.parent = new Parent(this.firstName, this.lastName, this.email, this.password);
    this.parent.type = this.type;
    this.parentService.createParent(this.parent)
      .subscribe(
        data => {
          console.log(data);
          this.pagesRouter.navigate(['parents']);
        }
      );
  }
}
