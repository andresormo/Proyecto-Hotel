import { Component } from '@angular/core';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';
import { RoomI } from 'src/app/core/services/rooms/models/room.interface';
import { RoomService } from 'src/app/core/services/rooms/room.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent{
  public rooms?: RoomI[];
  public idRoomSelect?: string;
  public confirmComponent:boolean = false;
  public bookingToConfirm?: BookingI;

  public getIdRoom(id:string){
    if(id){
      this.idRoomSelect=id
    }
  }

  constructor(
    private roomService: RoomService
    ) {
    this.getRoom()
  }



  public getRoom() {
      this.roomService.getAllRoom().subscribe((room: RoomI[]) => {
        this.rooms = room;
      });
  }

  public getConfirm(confirm:boolean){
    this.confirmComponent = confirm;
  }

  public editBooking(editRoom: BookingI){
    this.bookingToConfirm = editRoom;
    this.confirmComponent = false;
  }
}
