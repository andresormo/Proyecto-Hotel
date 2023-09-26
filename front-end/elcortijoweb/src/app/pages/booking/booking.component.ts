import { Component } from '@angular/core';
import { RoomI } from 'src/app/core/services/rooms/models/room.interface';
import { RoomService } from 'src/app/core/services/rooms/room.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  public rooms?: RoomI[];
  
  constructor(private roomService: RoomService) {
    this.getRoom()
  }

  public getRoom() {
    this.roomService.getAllRoom().subscribe((room: RoomI[]) => {
      this.rooms = room;
    });
  }

}
