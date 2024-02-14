import { TestBed } from '@angular/core/testing';

import { ApiRoomService } from './api-room.service';
import { RoomService } from '../room.service';
import { AuthServiceStub } from '../../user-auth/user-auth.service.stub';

describe('ApiRoomService', () => {
  let service: ApiRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: ApiRoomService, useClass: AuthServiceStub}
      ]
    });
    service = TestBed.inject(ApiRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
