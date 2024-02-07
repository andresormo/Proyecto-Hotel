
import { Injectable } from '@angular/core';
import { ApiBookingService } from './api/api-booking.service';
import { Observable, map } from 'rxjs';
import { ApiBooking, BookingI } from './models/booking.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private apiBookingServive: ApiBookingService
  ) { }

  public getAllBooking(): Observable<BookingI[]>{
    return this.apiBookingServive.getApiBooking().pipe(map((apiBooking: ApiBooking[])=> this.transformBooking(apiBooking)))
  }

  public getBookingById(id:string): Observable<BookingI>{
    return this.apiBookingServive.getApiBookingId(id).pipe(map((apiBooking:ApiBooking)=> this.transformBookingOne(apiBooking)))
  }


  public createBooking(body: BookingI): Observable<BookingI>{
    return this.apiBookingServive.createBooking(body).pipe(map((apiBooking)=>this.transformBookingOne(apiBooking)))
  }

  public deleteBooking(id: string): Observable<BookingI>{
    return this.apiBookingServive.deleteApiBooking(id)
  }

//FUNCIONES PARA MANEJAR DATOS DE ENTRADA
  private transformBooking(apiBooking: ApiBooking[]): BookingI[]{

    const bookingTransformed = apiBooking.map((booking)=>
      this.transformBookingOne(booking)
    );
    return bookingTransformed
  }

  private transformBookingOne(apiBooking: ApiBooking): BookingI{
    delete apiBooking.__v, delete apiBooking.ceatedAt, delete apiBooking.updateUp;

    return apiBooking
  }
}
