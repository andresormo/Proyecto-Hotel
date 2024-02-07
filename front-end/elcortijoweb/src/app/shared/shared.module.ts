import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountClientComponent } from './components/count-client/count-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormCreateRoomsComponent } from './components/form-create-rooms/form-create-rooms.component';
import { DateInPipe } from './pipes/filterDate/dateIn.pipe';
import { ModalConfirmComponent } from './components/modals-type/modal-confirm/modal-confirm.component';
import { FormPreBookingComponent } from './components/form-pre-booking/form-pre-booking.component';
import { BookingDetailComponent } from './components/booking-detail/booking-detail.component';



@NgModule({
  declarations: [
    CountClientComponent,
    FormUserComponent,
    FormCreateRoomsComponent,
    DateInPipe,
    ModalConfirmComponent,
    FormPreBookingComponent,
    BookingDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormUserComponent,
    FormCreateRoomsComponent,
    DateInPipe,
    ModalConfirmComponent,
    FormPreBookingComponent,
    BookingDetailComponent
  ]
})
export class SharedModule { }
