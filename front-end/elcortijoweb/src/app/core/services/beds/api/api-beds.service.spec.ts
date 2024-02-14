import { TestBed } from '@angular/core/testing';

import { ApiBedsService } from './api-beds.service';
import { AuthServiceStub } from '../../user-auth/user-auth.service.stub';

describe('ApiBedsService', () => {
  let service: ApiBedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: ApiBedsService, useClass: AuthServiceStub}
      ]
    });
    service = TestBed.inject(ApiBedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
