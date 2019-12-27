import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCoursesToTeacherComponent } from './assign-courses-to-teacher.component';

describe('AssignTeacherToCourseComponent', () => {
  let component: AssignCoursesToTeacherComponent;
  let fixture: ComponentFixture<AssignCoursesToTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignCoursesToTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCoursesToTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
