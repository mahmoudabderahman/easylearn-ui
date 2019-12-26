import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStudentsToParentComponent } from './assign-students-to-parent.component';

describe('AssignStudentsToParentComponent', () => {
  let component: AssignStudentsToParentComponent;
  let fixture: ComponentFixture<AssignStudentsToParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignStudentsToParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStudentsToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
