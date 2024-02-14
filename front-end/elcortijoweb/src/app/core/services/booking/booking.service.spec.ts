import { TestBed } from '@angular/core/testing';

import { BookingService } from './booking.service';
import { AuthServiceStub } from '../user-auth/user-auth.service.stub';
import { RoomService } from '../rooms/room.service';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: BookingService, useClass: AuthServiceStub }
      ]
    });
    service = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
