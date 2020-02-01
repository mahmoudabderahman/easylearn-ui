import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCoursesOfStudentComponent } from './find-courses-of-student.component';

describe('FindCoursesOfStudentComponent', () => {
  let component: FindCoursesOfStudentComponent;
  let fixture: ComponentFixture<FindCoursesOfStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCoursesOfStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCoursesOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
