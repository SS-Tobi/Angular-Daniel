import { TestBed, async, inject } from '@angular/core/testing';

import { IsGuestGuard } from './is-guest.guard';

describe('IsGuestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsGuestGuard]
    });
  });

  it('should ...', inject([IsGuestGuard], (guard: IsGuestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
