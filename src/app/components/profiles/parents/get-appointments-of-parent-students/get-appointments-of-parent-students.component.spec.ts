import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAppointmentsOfParentStudentsComponent } from './get-appointments-of-parent-students.component';

describe('GetAppointmentsOfParentStudentsComponent', () => {
  let component: GetAppointmentsOfParentStudentsComponent;
  let fixture: ComponentFixture<GetAppointmentsOfParentStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAppointmentsOfParentStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAppointmentsOfParentStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
