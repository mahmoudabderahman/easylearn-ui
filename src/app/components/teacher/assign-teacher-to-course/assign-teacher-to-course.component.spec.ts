import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTeacherToCourseComponent } from './assign-teacher-to-course.component';

describe('AssignTeacherToCourseComponent', () => {
  let component: AssignTeacherToCourseComponent;
  let fixture: ComponentFixture<AssignTeacherToCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTeacherToCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTeacherToCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
