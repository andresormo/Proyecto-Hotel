import { TestBed } from '@angular/core/testing';

import { UserAuthService } from './user-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceStub } from './user-auth.service.stub';

describe('UserAuthService', () => {
  let service: UserAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers:[{provide: UserAuthService, useClass: AuthServiceStub}]
    });
    service = TestBed.inject(UserAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
