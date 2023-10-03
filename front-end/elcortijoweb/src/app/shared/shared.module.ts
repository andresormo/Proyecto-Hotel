import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBookingComponent } from './components/form-booking/form-booking.component';
import { CountClientComponent } from './components/count-client/count-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormCreateRoomsComponent } from './components/form-create-rooms/form-create-rooms.component';
import { DateInPipe } from './pipes/filterDate/filterDateIn/dateIn.pipe';
import { DateOutPipe } from './pipes/filterDate/filterDateOut/date-out.pipe';



@NgModule({
  declarations: [
    FormBookingComponent,
    CountClientComponent,
    FormUserComponent,
    FormCreateRoomsComponent,
    DateInPipe,
    DateOutPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormBookingComponent,
    FormUserComponent,
    FormCreateRoomsComponent,
    DateInPipe,
    DateOutPipe
  ]
})
export class SharedModule { }
