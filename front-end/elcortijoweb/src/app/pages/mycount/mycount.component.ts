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
  public userIsAdmin: boolean = false;

  constructor(
    public bookingService: BookingService,
    public userService: UserAuthService
  ){}

  public getBooking(){
   this.bookingService.getAllBooking().subscribe((bookings: BookingI[])=>{
    this.bookings = bookings;
   })
  }

  public formatDate(dateString: Date): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }


ngOnInit(): void {
  this.getBooking();
}

}
