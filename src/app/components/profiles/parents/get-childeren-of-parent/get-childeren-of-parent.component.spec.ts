import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChilderenOfParentComponent } from './get-childeren-of-parent.component';

describe('GetChilderenOfParentComponent', () => {
  let component: GetChilderenOfParentComponent;
  let fixture: ComponentFixture<GetChilderenOfParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetChilderenOfParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetChilderenOfParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
