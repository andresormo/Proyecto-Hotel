import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoom, RoomI } from '../models/room.interface';


const API_URL = 'http://localhost:3030';
@Injectable({
  providedIn: 'root'
})
export class ApiRoomService {

  constructor(
    private http: HttpClient
  ) {}

  public getApiRoom(): Observable<ApiRoom[]>{
    return this.http.get<ApiRoom[]>(`${API_URL}/rooms`)
  }

  public createApiRoom(body: FormData): Observable<ApiRoom>{
    return this.http.post<ApiRoom>(`${API_URL}/rooms`, body)
  }

  public deleteApiRoom(id: string): Observable<ApiRoom>{
    return this.http.delete<ApiRoom>(`${API_URL}/rooms/delete/${id}`)
  }
}
