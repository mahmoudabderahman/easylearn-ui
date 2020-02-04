import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEvaluationOfChildComponent } from './get-evaluation-of-child.component';

describe('GetEvaluationOfChildComponent', () => {
  let component: GetEvaluationOfChildComponent;
  let fixture: ComponentFixture<GetEvaluationOfChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEvaluationOfChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEvaluationOfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
