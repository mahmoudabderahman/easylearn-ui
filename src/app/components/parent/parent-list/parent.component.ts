import {Component, OnInit} from '@angular/core';
import {ParentService} from '../../../services/data/parent/parent.service';
import {Router} from '@angular/router';
import {MatConfirmDialogService} from '../../../services/util/mat-confirm-dialog.service';


export class Parent {
  public id: number;
  public type: ParentType;

  constructor(
    public firstName: string,
    public lastName: string,
    public username: string,
    public password: string,
  ) {
  }

}


export enum ParentType {
  FATHER = 'FATHER',
  MOTHER = 'MOTHER',
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parents: Parent[];
  message: string;
  parent: Parent;

  constructor(private parentService: ParentService, private router: Router, private dialogService: MatConfirmDialogService) {
  }

  ngOnInit() {
    this.refreshParents();
  }

  refreshParents() {
    this.parentService.getParents().subscribe(
      data => {
        this.parents = data;
      },
      error => console.error(error),
      () => console.log('Parents loaded')
    );
  }

  deleteParent(id) {
    this.dialogService.openConfirmDialog('Are you sure that you want to delete this parent?')
      .afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.parentService.deleteParent(id).subscribe(
          response => {
            this.message = `Delete of Parent with ID: ${id} successful`;
            this.refreshParents();
          }
        );
      }
    });

  }

  updateParent(id) {
    this.router.navigate(['parents/edit', id]);
  }


  createParent() {
    this.router.navigate(['parents/create']);
  }

  assignStudents(id) {
    this.router.navigate(['parents/assignStudentsToParent', id]);
  }
}
