import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStudentsToCourseComponent } from './assign-students-to-course.component';

describe('AssignStudentsToCourseComponent', () => {
  let component: AssignStudentsToCourseComponent;
  let fixture: ComponentFixture<AssignStudentsToCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignStudentsToCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStudentsToCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
