import { Observable, ReplaySubject, of } from "rxjs";
import { IUserSingInResponse, UserI } from "./models/user.model";
import { userMock, userSingInResponseMock } from "./user-auth.service.mocks";



// Para evitar que los test den errores cuando hacen testean componentes que utilizan un servicio
// el cual tiene alguna función de peticion a una API
// creamos un servicio falso para hacer los test y hacer mas efectivo el rendimiento
// de los test

// Hemos creado además dos interfaces Moqueadas para hacer el falso servicio

export class AuthServiceStub{
  public isLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public isUser$: ReplaySubject<string | null> = new ReplaySubject<string | null>(1);

  constructor() {
    this.isLogged$.next(true);
  }

  // con of de rxjs podemos cambiar le pasamos un valor entre () y lo transforma a un Observable
  public login(user: UserI): Observable<IUserSingInResponse> {
    this.isLogged$.next(true)
    return of(userSingInResponseMock)
  }


  public getUserId(): string {
      return userMock._id;

  }

  public logOut() {
    this.isLogged$.next(false);
  }

  public register(body: FormData): Observable<UserI> {
    return of(userMock)
  }

  public isLogged(): boolean {
    return true;
  }

  public isUser(): string|null{
    return userMock.rol;
  }


  public getToken(){
    return userSingInResponseMock.token;
  }
}
