import { Pipe, PipeTransform } from '@angular/core';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';

@Pipe({
  name: 'dateOut'
})
export class DateOutPipe implements PipeTransform {

  transform(value: BookingI[], filterKey: Date): BookingI[]{

    const bookingFilter:BookingI[] = [];
        value.filter((booking) => {
          console.log(filterKey);

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
