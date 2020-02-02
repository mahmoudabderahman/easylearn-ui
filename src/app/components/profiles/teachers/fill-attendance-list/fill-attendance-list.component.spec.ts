import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillAttendanceListComponent } from './fill-attendance-list.component';

describe('FillAttendanceListComponent', () => {
  let component: FillAttendanceListComponent;
  let fixture: ComponentFixture<FillAttendanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillAttendanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillAttendanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
