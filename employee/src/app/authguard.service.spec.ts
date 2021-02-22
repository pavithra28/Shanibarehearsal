import { TestBed } from '@angular/core/testing';

import { AuthgradeService } from './authguard.service';

describe('AuthgradeService', () => {
  let service: AuthgradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthgradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
