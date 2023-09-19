import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycountRoutingModule } from './mycount-routing.module';
import { MycountComponent } from './mycount.component';


@NgModule({
  declarations: [
    MycountComponent
  ],
  imports: [
    CommonModule,
    MycountRoutingModule
  ]
})
export class MycountModule { }
