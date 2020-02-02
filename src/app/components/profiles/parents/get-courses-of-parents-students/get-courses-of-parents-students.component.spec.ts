import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCoursesOfParentsStudentsComponent } from './get-courses-of-parents-students.component';

describe('GetCoursesOfParentsStudentsComponent', () => {
  let component: GetCoursesOfParentsStudentsComponent;
  let fixture: ComponentFixture<GetCoursesOfParentsStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCoursesOfParentsStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCoursesOfParentsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
