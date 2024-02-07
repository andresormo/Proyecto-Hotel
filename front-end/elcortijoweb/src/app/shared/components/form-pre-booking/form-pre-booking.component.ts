import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';
import { RoomI } from 'src/app/core/services/rooms/models/room.interface';
import { UserI } from 'src/app/core/services/user-auth/models/user.model';
import { RoomService } from 'src/app/core/services/rooms/room.service';


@Component({
  selector: 'app-form-pre-booking',
  templateUrl: './form-pre-booking.component.html',
  styleUrls: ['./form-pre-booking.component.scss']
})
export class FormPreBookingComponent {

  // el decorador Output esta sirviendo para pasar informacion del hijo(form-pre-booking)
  // al padre (booking-component),
  // en este caso informa de que:
  //  el confirmador de reserva ya se puede abrir para finalizar la reserva que seria el confirm-booking

  @Output() openConfirmComponent = new EventEmitter;

  public preBooking?: BookingI;
  public rooms?: RoomI[];
  public users?: UserI[];
  public bookingForm?: FormGroup;
  public userId?: string;
  public roomId?: RoomI;

  public hasFormError: boolean = false;
  public hasSuccess: boolean = false;
  public openConfirm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService,
    private roomService: RoomService
  ) {

    roomService.getAllRoom().subscribe((roomArray: RoomI[])=> this.rooms = roomArray)
    this.userId = this.userAuthService.getUserId();
    this.initForm();
  }

  public handleBooking(){

    if(this.bookingForm?.valid){
      this.hasSuccess=true;
      this.hasFormError=false;
    } else{
      this.hasFormError = true
    }
  }

  public selectRoom(id:RoomI){
  this.roomId = id;
  this.bookingForm?.get('room')?.setValue(id);
  this.openConfirm= true;
  this.sendConfirm();
  localStorage.setItem('preBooking', JSON.stringify(this.bookingForm?.value));

  }

  public sendConfirm(){
    this.openConfirmComponent.emit(this.openConfirm);
  }

  private initForm(){

    this.bookingForm = this.formBuilder.group({
      user: [this.userId],
      dateIn: new FormControl(this.preBooking?.dateIn || '', [
        Validators.required,
      ]),
      dateOut: new FormControl(this.preBooking?.dateOut || '', [
        Validators.required,
      ]),
      room: [this.preBooking?.room || ''],
      persons: new FormControl(this.preBooking?.persons || 1, [
        Validators.required,
      ]),
    });
  }
}
