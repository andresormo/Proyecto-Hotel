import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomI } from './models/room.interface';
import { ApiRoomService } from './api/api-room.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
   private roomService: ApiRoomService
  ) { }

  public getAllRoom(): Observable<RoomI[]>{
    return this.roomService.getApiRoom()
  }
}
