import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCoursesOfTeacherComponent } from './get-courses-of-teacher.component';

describe('GetCoursesOfTeacherComponent', () => {
  let component: GetCoursesOfTeacherComponent;
  let fixture: ComponentFixture<GetCoursesOfTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCoursesOfTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCoursesOfTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
