import { TestBed } from '@angular/core/testing';

import { ApiBookingService } from './api-booking.service';
import { AuthServiceStub } from '../../user-auth/user-auth.service.stub';

describe('ApiBookingService', () => {
  let service: ApiBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: ApiBookingService, useClass: AuthServiceStub }]
    });
    service = TestBed.inject(ApiBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
