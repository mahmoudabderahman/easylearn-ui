/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Student} from '../../student/student-list/student.component';
import {Parent} from '../parent-list/parent.component';
import {ParentService} from '../../../services/data/parent/parent.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../../services/data/student/student.service';
import {MatConfirmDialogService} from '../../../services/util/mat-confirm-dialog.service';

@Component({
  selector: 'app-assign-students-to-parent',
  templateUrl: './assign-students-to-parent.component.html',
  styleUrls: ['./assign-students-to-parent.component.css']
})
export class AssignStudentsToParentComponent implements OnInit {

  form: FormGroup;
  private studentsData: Student[];
  parentId: number;
  parentFirstName: string;
  parentLastName: string;
  students: any;
  parent: Parent;

  constructor(
    private parentService: ParentService,
    private router: ActivatedRoute,
    private pagesRouter: Router,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private dialogService: MatConfirmDialogService
  ) {
    this.form = this.formBuilder.group({
      students: new FormArray([])
    });
    this.parentId = this.router.snapshot.params['id'];
    this.parentService.getParent(this.parentId).subscribe(
      data => {
        this.parent = data;
        this.parentFirstName = data.firstName;
        this.parentLastName = data.lastName;
      }
    );
    this.studentService.getStudentsNotAllocatedToParent().subscribe(
      data => {
        this.studentsData = data;
        this.studentsData.forEach((o, i) => {
          const control = new FormControl(i == 0);
          (this.form.controls.students as FormArray).push(control);
        });
      }
    );
  }

  ngOnInit() {
  }

  submit() {
    this.dialogService.openConfirmDialog('Are you sure that you want to assign these students to this parent?')
      .afterClosed().subscribe(
      res => {
        if (res) {
          const selectedPreferences = this.form.value.students
            .map((checked, index) => checked ? this.studentsData[index].id : null)
            .filter(value => value != null);
          console.log(selectedPreferences.length);
          this.parentService.assignStudentsToParent(this.parentId, selectedPreferences)
            .subscribe(
              data => {
                console.log(data);
                this.pagesRouter.navigate(['parents']);
              }
            );
        }
      }
    );

  }
}
