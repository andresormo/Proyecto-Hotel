import { TestBed } from '@angular/core/testing';

import { UserAuthService } from './user-auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserAuthService', () => {
  let service: UserAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UserAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
