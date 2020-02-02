import {Component, OnInit} from '@angular/core';
import {Student} from '../../../student/student-list/student.component';
import {StudentService} from '../../../../services/data/student/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatConfirmDialogService} from '../../../../services/util/mat-confirm-dialog.service';
import {AppointmentService} from '../../../../services/data/appointment/appointment.service';
import {Appointment} from '../../../appointment/appointment-list/appointment.component';

@Component({
  selector: 'app-get-childeren-of-parent',
  templateUrl: './get-childeren-of-parent.component.html',
  styleUrls: ['./get-childeren-of-parent.component.css']
})
export class GetChilderenOfParentComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dialogService: MatConfirmDialogService) {
  }

  ngOnInit() {
    this.refreshStudents();
  }

  refreshStudents() {
    this.studentService.getStudentsAllocatedToParent(this.activatedRoute.snapshot.params['id']).subscribe(
      data => {
        this.students = data;
      },
      err => console.error(err),
      () => console.log('Students loaded')
    );
  }

  showCoursesOfStudent(id) {
    this.router.navigate(['courses/student', id]);

  }

  showAppointmentsOfStudent(id) {
    this.router.navigate(['appointments/parent/student', id])
    /*
    this.appointmentService.findAllIdealAppointmentsOfStudent(id).subscribe(
      data => {
        this.appointments = data;
      },
      error => console.error(error)
    );
    */

  }
}
