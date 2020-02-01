import {Component, OnInit} from '@angular/core';
import {Parent, ParentType} from '../parent-list/parent.component';
import {ParentService} from '../../../services/data/parent/parent.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatConfirmDialogService} from '../../../services/util/mat-confirm-dialog.service';

@Component({
  selector: 'app-parent-update',
  templateUrl: './parent-update.component.html',
  styleUrls: ['./parent-update.component.css']
})
export class ParentUpdateComponent implements OnInit {

  id: number;
  parent: Parent;
  type: ParentType;
  notSelectedParentType: ParentType;
  selectedType: ParentType;

  constructor(
    private parentService: ParentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private dialogService: MatConfirmDialogService
  ) {
  }

  ngOnInit() {
    this.parent = new Parent('', '', '', '');
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.parentService.getParent(this.id).subscribe(
      data => {
        this.parent = data;
        this.selectedType = data.type;
        console.log(this.type);
        this.updateParentTypeSelections();
      }
    );

  }


  saveParent() {
    this.dialogService.openConfirmDialog('Are you sure that you want to save these changes?')
      .afterClosed().subscribe(
      res => {
        if (res) {
          this.parentService.updateParent(this.id, this.parent)
            .subscribe(
              data => {
                this.pagesRouter.navigate(['parents']);
              }
            );
        }

      }
    );
  }


  updateParentTypeSelections() {
    if (this.selectedType === ParentType.FATHER) {
      this.notSelectedParentType = ParentType.MOTHER;
    } else {
      this.notSelectedParentType = ParentType.FATHER;
    }
  }

}
