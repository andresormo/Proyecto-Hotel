import { Component, Input, OnInit } from '@angular/core';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';
import { formatDateFunction } from '../functions/functios';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() public bookingsToShow?: BookingI[];

  public passBooking: BookingI[] = [];
  public nextBooking: BookingI[] = [];

  public dateActually: Date = new Date();
  public bookingDate?: Date;

  ngOnInit(): void {
    this.bookingToShowDate()
   }

  public formatDateComponent(date: Date) {
    return formatDateFunction(date);
  }

  public bookingToShowDate() {
    if (this.bookingsToShow) {
      for (let bookingDesire of this.bookingsToShow) {
        this.bookingDate = new Date(bookingDesire.dateIn);
        if (
          this.bookingDate.getTime() / 1000 <=
          Math.floor(this.dateActually.getTime() / 1000)
        ) {
          this.passBooking.push(bookingDesire);
        }

        else if (
          this.bookingDate.getTime() / 1000 >=
          Math.floor(this.dateActually.getTime() / 1000)
        ) {
          this.nextBooking.push(bookingDesire);
        }
      }
    }
  }
}
