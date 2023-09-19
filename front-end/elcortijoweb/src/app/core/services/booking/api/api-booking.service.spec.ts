import { TestBed } from '@angular/core/testing';

import { ApiBookingService } from './api-booking.service';

describe('ApiBookingService', () => {
  let service: ApiBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
