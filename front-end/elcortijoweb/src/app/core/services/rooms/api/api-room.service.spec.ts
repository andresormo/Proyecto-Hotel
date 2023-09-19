import { TestBed } from '@angular/core/testing';

import { ApiRoomService } from './api-room.service';

describe('ApiRoomService', () => {
  let service: ApiRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
