import { BookingI } from '../../../../core/services/booking/models/booking.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class DateInPipe implements PipeTransform {
    transform(value: BookingI[], filterKey: Date): BookingI[]{

      const bookingFilter:BookingI[] = [];
          value.filter((booking) => {

              let date1 = new Date(booking.dateIn);
              let date2 = new Date(filterKey);

              if(date1>date2){
                bookingFilter.push(booking)
              }
          });
          console.log(bookingFilter);

          return bookingFilter;
  }

}
