import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudentsInCourseComponent } from './get-students-in-course.component';

describe('GiveResultToStudentComponent', () => {
  let component: GetStudentsInCourseComponent;
  let fixture: ComponentFixture<GetStudentsInCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStudentsInCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStudentsInCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
