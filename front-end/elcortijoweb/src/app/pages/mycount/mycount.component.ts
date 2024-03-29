import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';
import { UserI } from 'src/app/core/services/user-auth/models/user.model';
import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';

@Component({
  selector: 'app-mycount',
  templateUrl: './mycount.component.html',
  styleUrls: ['./mycount.component.scss']
})
export class MycountComponent implements OnInit {

  public bookings?: BookingI[];
  public users?: UserI[];
  public user?: string | null;
  public userIsAdmin: boolean = false;

  constructor(
    public bookingService: BookingService,
    public userService: UserAuthService
  ){
    scroll(screenTop, 0);
    this.getBooking();
  }

  ngOnInit(): void {
    this.user = this.userService.isUser();
  }

  public getBooking(){
  this.bookingService.getAllBooking().subscribe((booking: BookingI[])=>{
    this.bookings = booking;
  })

  }
}
