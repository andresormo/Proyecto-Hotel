import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBooking, BookingI } from '../models/booking.interface';


const API_URL = 'http://localhost:3030/booking'

@Injectable({
  providedIn: 'root'
})
export class ApiBookingService {

  constructor(
    private http: HttpClient
  ) { }

public getApiBooking(): Observable<ApiBooking[]>{
  return this.http.get<ApiBooking[]>(`${API_URL}`)
}

public getApiBookingId(id:string): Observable<ApiBooking>{
  return this.http.get<ApiBooking>(`${API_URL}/booking/${id}`)
}

public createBooking(body:BookingI): Observable<ApiBooking>{
  return this.http.post<ApiBooking>(`${API_URL}`, body)
}

public updateBooking(body:FormData, id:string): Observable<ApiBooking>{
  return this.http.put<ApiBooking>(`${API_URL}/update/${id}`, body)
}

public deleteApiBooking(id:string): Observable<ApiBooking>{
  return this.http.delete<ApiBooking>(`${API_URL}/booking/delete/${id}`)
}

}
