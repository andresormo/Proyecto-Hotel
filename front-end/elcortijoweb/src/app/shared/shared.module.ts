import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBookingComponent } from './components/form-booking/form-booking.component';
import { CountClientComponent } from './components/count-client/count-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from './components/form-user/form-user.component';



@NgModule({
  declarations: [
    FormBookingComponent,
    CountClientComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormBookingComponent,
    FormUserComponent
  ]
})
export class SharedModule { }
