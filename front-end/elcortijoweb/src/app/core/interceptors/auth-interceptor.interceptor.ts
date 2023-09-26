import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user-auth/user-auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(
    public authService: UserAuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    (request);
    const token = this.authService.getToken();
    if(token){
      request = request.clone({


        setHeaders:{
          Authorization: `Bearer ${token}`

        }
      })
    }
    return next.handle(request);
  }
}
