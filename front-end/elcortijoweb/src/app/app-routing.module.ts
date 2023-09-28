import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: ()=> import('./pages/home/home.module').then((m)=>m.HomeModule)
  },
  {
    path:'booking',
    loadChildren: ()=>import('./pages/booking/booking.module').then((m)=>m.BookingModule),
    canActivate:[authGuard]
  },
  {
    path:'mycount',
    loadChildren: ()=> import('./pages/mycount/mycount.module').then((m)=>m.MycountModule),
    canActivate:[authGuard]
  },
  {

    path:'login',
    loadChildren: ()=> import('./pages/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:'register',
    loadChildren:()=> import('./pages/register/register.module').then((m)=>m.RegisterModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
