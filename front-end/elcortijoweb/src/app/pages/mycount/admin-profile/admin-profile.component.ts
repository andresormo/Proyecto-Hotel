import { Component, Input, OnInit } from '@angular/core';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';
import { formatDateFunction } from '../functions/functios';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent{
  @Input() public bookingsToShow?: BookingI[];

  public dateIn: Date;
  public dateOut: Date;

  constructor(){
    this.dateIn = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    this.dateOut = nextWeek;
  }


  public formatDateComponent(date:Date){
    return formatDateFunction(date);
  }

}
