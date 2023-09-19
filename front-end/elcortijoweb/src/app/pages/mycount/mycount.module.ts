import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycountRoutingModule } from './mycount-routing.module';
import { MycountComponent } from './mycount.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { FormCreateRoomsComponent } from 'src/app/shared/components/form-create-rooms/form-create-rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MycountComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    MycountRoutingModule,
    SharedModule
  ]
})
export class MycountModule { }
