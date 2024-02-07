import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent  implements OnInit{

  public booking?: BookingI;
  @Input() public bookingIdDetail?: string;

constructor(
  public bookingService: BookingService
){}

ngOnInit(): void {
  this.bookingIdDetail ? this.showBooking(this.bookingIdDetail) : null;
}

public showBooking(id:string){
  this.bookingService.getBookingById(id).subscribe((booking)=>{
    this.booking = booking
  });
}
}
