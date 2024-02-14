import { of } from 'rxjs';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { RoomI } from './models/room.interface';
import { RoomMock } from './room.service.mocks';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceStubs {

  public getAllRoom(): Observable<RoomI>{
    return of(RoomMock)
  }

  public getRoomById(id:string): Observable<RoomI>{
    return of(RoomMock);
  }

  // public createRoom(body: FormData): Observable<RoomI>{
  //   return this.roomService.createApiRoom(body)
  // }
  // public deleteRoom(id:string): Observable<RoomI>{
  //   return this.roomService.deleteApiRoom(id);
  // }

}
