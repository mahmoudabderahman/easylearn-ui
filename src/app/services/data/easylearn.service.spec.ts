import { TestBed } from '@angular/core/testing';

import { EasylearnService } from './easylearn.service';

describe('EasylearnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasylearnService = TestBed.get(EasylearnService);
    expect(service).toBeTruthy();
  });
});
