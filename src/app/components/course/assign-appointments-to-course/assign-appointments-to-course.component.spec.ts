import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAppointmentsToCourseComponent } from './assign-appointments-to-course.component';

describe('AssignAppointmentsToCourseComponent', () => {
  let component: AssignAppointmentsToCourseComponent;
  let fixture: ComponentFixture<AssignAppointmentsToCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAppointmentsToCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAppointmentsToCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
