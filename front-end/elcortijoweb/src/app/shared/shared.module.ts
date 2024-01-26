import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountClientComponent } from './components/count-client/count-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormCreateRoomsComponent } from './components/form-create-rooms/form-create-rooms.component';
import { DateInPipe } from './pipes/filterDate/dateIn.pipe';
import { ModalConfirmComponent } from './components/modals-type/modal-confirm/modal-confirm.component';
import { FormBookingComponent } from './components/form-booking/form-booking/form-booking.component';
import { FormPreBookingComponent } from './components/form-booking/form-pre-booking/form-pre-booking/form-pre-booking.component';



@NgModule({
  declarations: [
    FormBookingComponent,
    CountClientComponent,
    FormUserComponent,
    FormCreateRoomsComponent,
    DateInPipe,
    ModalConfirmComponent,
    FormPreBookingComponent
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
    ModalConfirmComponent,
    FormPreBookingComponent
  ]
})
export class SharedModule { }
