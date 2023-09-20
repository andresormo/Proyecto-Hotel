import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { RoomI } from './models/room.interface';
import { ApiRoomService } from './api/api-room.service';
import { FormGroup } from '@angular/forms';

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

  public createRoom(body:FormData): Observable<RoomI>{
    return this.roomService.createApiRoom(body)
  }
}
