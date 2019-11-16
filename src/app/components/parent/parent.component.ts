import { Component, OnInit } from '@angular/core';
import {EasylearnService} from '../../services/easylearn.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public parents;

  constructor(private easylearnService: EasylearnService) { }

  ngOnInit() {
    this.getParents();
  }

  private getParents() {
    this.easylearnService.getParents().subscribe(
      data => {this.parents = data; },
      err => console.error(err),
      () => console.log('Parents loaded')
    );
  }
}
