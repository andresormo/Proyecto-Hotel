import { TestBed } from '@angular/core/testing';

import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { HttpClientModule } from '@angular/common/http';

describe('AuthInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterceptorInterceptor
      ],
      imports:[
        HttpClientModule
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptorInterceptor = TestBed.inject(AuthInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
