import {Component, OnInit} from '@angular/core';
import {Parent, ParentType} from '../parent-list/parent.component';
import {ParentService} from '../../../services/data/parent/parent.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-parent-update',
  templateUrl: './parent-update.component.html',
  styleUrls: ['./parent-update.component.css']
})
export class ParentUpdateComponent implements OnInit {

  id: number;
  parent: Parent;
  type: ParentType;

  constructor(
    private parentService: ParentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
  ) { }

  ngOnInit() {
    this.parent = new Parent('', '', '', '');
    this.id = this.router.snapshot.params['id']
    this.parentService.getParent(this.id).subscribe(
      data => this.parent = data
    );
  }

  saveParent() {

    this.parentService.updateParent(this.id, this.parent)
      .subscribe(
        data => {
          this.pagesRouter.navigate(['parents']);
        }
      );
  }
}
