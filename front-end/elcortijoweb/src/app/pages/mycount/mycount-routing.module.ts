import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycountComponent } from './mycount.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: MycountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycountRoutingModule { }
