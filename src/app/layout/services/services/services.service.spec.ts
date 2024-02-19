import { TestBed, inject } from '@angular/core/testing';
import { ServicesService } from './services.service';

describe('ActiveBookingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesService]
    });
  });

  it('should be created', inject([ServicesService], (service: ServicesService) => {
    expect(service).toBeTruthy();
  }));
});
