import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { RoomI } from './models/room.interface';
import { ApiRoomService } from './api/api-room.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {


  constructor(
   private roomService: ApiRoomService,
   public http : HttpClient
  ) { }

  public getAllRoom(): Observable<RoomI[]>{
    return this.roomService.getApiRoom()
  }

  public getRoomById(id:string): Observable<RoomI>{
    return this.roomService.getApiRoomById(id);
  }

  public createRoom(body: FormData): Observable<RoomI>{
    return this.roomService.createApiRoom(body)
  }
  public deleteRoom(id:string): Observable<RoomI>{
    return this.roomService.deleteApiRoom(id);
  }

}
