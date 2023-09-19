import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, tap, throwError } from 'rxjs';
import { IUserSingInResponse, UserI } from './models/user.model';

const URL_USER = 'http://localhost:3030/users';
const TOKEN_KEY = 'jwt-auth-token';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  public isLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);


  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    const isLogged = this.isLogged();
    this.isLogged$.next(isLogged);
  }
  public login(user: UserI): Observable<IUserSingInResponse> {
    return this.http.post<IUserSingInResponse>(`${URL_USER}/login`, user).pipe(
      tap((res: IUserSingInResponse) => {
        const userStore = JSON.stringify({
          token: res.token,
          email: res.userToLog.email,
          id: res.userToLog._id,
          rol: res.userToLog.rol,
        });
        localStorage.setItem(TOKEN_KEY, userStore);

        this.isLogged$.next(true);
        this.router.navigate(['mycount']);
      })
    );
  }


  public getUserId(): string {
    const tokenUser = localStorage.getItem(TOKEN_KEY);

    if (tokenUser) {
      const userId = JSON.parse(tokenUser);
      return userId.id;
    }
    throw new Error('No se ha encontrado un usuario logueado.');
  }

  public logOut() {
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.isLogged$.next(false);

    if (removeToken != null) {
      this.router.navigate(['home']);
    }
  }

  public register(body: FormData): Observable<UserI> {
    return this.http.post<UserI>(`${URL_USER}/`, body).pipe(
      tap(() => {
        this.router.navigate(['booking']);
      })
    );
  }

  public isLogged(): boolean {
    const userToken = localStorage.getItem(TOKEN_KEY);
    if (!userToken) {
      return false;
    }
    return !!userToken;
  }


  public getToken(){
    const userToken = localStorage.getItem(TOKEN_KEY);

    return userToken ? JSON.parse(userToken).token : null;
  }
}
