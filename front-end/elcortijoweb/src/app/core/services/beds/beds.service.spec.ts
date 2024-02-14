import { TestBed } from '@angular/core/testing';

import { BedsService } from './beds.service';
import { AuthServiceStub } from '../user-auth/user-auth.service.stub';

describe('BedsService', () => {
  let service: BedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: BedsService, useClass: AuthServiceStub}
      ]
    });
    service = TestBed.inject(BedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
