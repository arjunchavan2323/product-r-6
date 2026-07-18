import { TestBed } from '@angular/core/testing';

import { UseroleGuard } from './userole.guard';

describe('UseroleGuard', () => {
  let guard: UseroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UseroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
