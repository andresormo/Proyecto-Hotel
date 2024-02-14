import { TestBed } from '@angular/core/testing';

import { RoomService } from './room.service';
import { AuthServiceStub } from '../user-auth/user-auth.service.stub';

describe('RoomService', () => {
  let service: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: RoomService, useClass: AuthServiceStub}]
    });
    service = TestBed.inject(RoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
