import { TestBed, inject } from '@angular/core/testing';

import { ActiveBookingsService } from './active-bookings.service';

describe('ActiveBookingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveBookingsService]
    });
  });

  it('should be created', inject([ActiveBookingsService], (service: ActiveBookingsService) => {
    expect(service).toBeTruthy();
  }));
});
