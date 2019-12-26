import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStudentsToAppointmentComponent } from './assign-students-to-appointment.component';

describe('AssignStudentsToAppointmentComponent', () => {
  let component: AssignStudentsToAppointmentComponent;
  let fixture: ComponentFixture<AssignStudentsToAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignStudentsToAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStudentsToAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
