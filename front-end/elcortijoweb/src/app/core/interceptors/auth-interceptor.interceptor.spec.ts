import { TestBed } from '@angular/core/testing';

import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { UserAuthService } from '../services/user-auth/user-auth.service';
import { AuthServiceStub } from '../services/user-auth/user-auth.service.stub';

describe('AuthInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterceptorInterceptor,
      {provide: UserAuthService, useClass: AuthServiceStub}
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptorInterceptor = TestBed.inject(AuthInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
