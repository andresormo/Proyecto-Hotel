import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';
import { RoomI } from 'src/app/core/services/rooms/models/room.interface';
import { UserI } from 'src/app/core/services/user-auth/models/user.model';
import { RoomService } from 'src/app/core/services/rooms/room.service';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss'],
})
export class FormBookingComponent {

  // public booking?: BookingI;
  // public rooms?: RoomI[];
  // public users?: UserI[];
  // public bookingForm?: FormGroup;
  // public userId?: string;
  // public roomId: string='';

  // public hasFormError: boolean = false;
  // public hasSuccess: boolean = false;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private bookingService: BookingService,
  //   private userAuthService: UserAuthService,
  //   private roomService: RoomService
  // ) {
  //   console.log(this.booking);

  //   roomService.getAllRoom().subscribe((roomArray: RoomI[])=> this.rooms = roomArray)
  //   this.userId = this.userAuthService.getUserId();
  //   this.initForm();

  // }

  // public handleBooking(){
  //   console.log(this.bookingForm?.value);

  //   if(this.bookingForm?.valid){
  //     this.createBooking();
  //     this.bookingForm.reset()
  //   } else{
  //     this.hasFormError = true
  //   }
  // }
  // private createBooking(){
  //   this.hasFormError=false;
  //   this.bookingService.createBooking(this.bookingForm?.value).subscribe()
  //   console.log('form-booking');
  // }


  // public selectRoom(id:string){
  // this.roomId = id;
  // this.bookingForm?.get('room')?.valueChanges.subscribe((value:string)=>{
  //   this.roomId = value
  //   console.log('form-booking');

  // })
  // }

  // private initForm(){

  //     console.log(this.roomId);
  //   this.bookingForm = this.formBuilder.group({
  //     user: [this.userId],
  //     dateIn: new FormControl(this.booking?.dateIn || '', [
  //       Validators.required,
  //     ]),
  //     dateOut: new FormControl(this.booking?.dateOut || '', [
  //       Validators.required,
  //     ]),
  //     room: [this.booking?.room || '', [Validators.required]],
  //     persons: new FormControl(this.booking?.persons || 1, [
  //       Validators.required,
  //     ]),
  //   });
  // }

}
