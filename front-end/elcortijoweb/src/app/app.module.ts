import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RegisterComponent } from './pages/register/register.component';
import { AuthInterceptorInterceptor } from './core/interceptors/auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
