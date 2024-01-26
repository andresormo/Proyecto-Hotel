import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.scss']
})
export class ConfirmBookingComponent{
@Output() editBookingRes = new EventEmitter;
public bookingToConfirmed?: BookingI;
public preBookingData = localStorage.getItem('preBooking');

constructor(
  public bookingService: BookingService,
  private router: Router
){
  if (this.preBookingData !== null) {
      this.bookingToConfirmed = JSON.parse(this.preBookingData);
      console.log('aqui llega');
  }
}

public editBooking(){
  this.editBookingRes.emit(this.bookingToConfirmed);
}

public createBooking(){
  if(this.bookingToConfirmed){
    this.bookingService.createBooking(this.bookingToConfirmed).subscribe();
  } else{
    return;
  }
  this.router.navigate(['mycount'])
}
}
