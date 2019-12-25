import { TestBed } from '@angular/core/testing';

import { MatConfirmDialogService } from './mat-confirm-dialog.service';

describe('MatConfirmDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatConfirmDialogService = TestBed.get(MatConfirmDialogService);
    expect(service).toBeTruthy();
  });
});
