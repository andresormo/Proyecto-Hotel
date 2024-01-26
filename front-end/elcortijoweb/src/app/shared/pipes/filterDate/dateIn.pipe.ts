import { BookingI } from '../../../core/services/booking/models/booking.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate',
})
export class DateInPipe implements PipeTransform {
  transform(
    value: BookingI[],
    filterDateIn?: Date,
    filterDateOut?: Date,
    filterId?: string
  ): BookingI[] {
    const bookingFilter: BookingI[] = [];

    if (filterDateIn) {
      value.filter((booking) => {
        let date1 = new Date(booking.dateIn);
        let date2 = new Date(filterDateIn);

        if (date1 >= date2) {
          bookingFilter.push(booking);
        }
      });
    }

    if (filterDateOut) {
        let date3 = new Date(filterDateOut)
      for (let i = bookingFilter.length - 1; i >= 0; i--) {
        let date1 = new Date(bookingFilter[i].dateIn);

        if (date1 > date3) {
          bookingFilter.splice(i, 1);
        }
      }
    }
    if(filterId){
      return bookingFilter.filter(booking=>{
        return booking._id.toLowerCase().includes(filterId.toLowerCase())
      })

    }

    return bookingFilter;
  }
}
