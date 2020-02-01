import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAppointmentsOfAStudentCoursesComponent } from './find-appointments-of-astudent-courses.component';

describe('FindAppointmentsOfAStudentCoursesComponent', () => {
  let component: FindAppointmentsOfAStudentCoursesComponent;
  let fixture: ComponentFixture<FindAppointmentsOfAStudentCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAppointmentsOfAStudentCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAppointmentsOfAStudentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
