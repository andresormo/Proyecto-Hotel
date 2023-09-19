import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoom } from '../models/room.interface';


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
}
