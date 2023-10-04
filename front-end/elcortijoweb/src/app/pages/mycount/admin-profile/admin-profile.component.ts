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

  public dateIn: Date = new Date();
  public dateOut?: Date;

  constructor(){
    this.addDaysAtDate();
  }


  public addDaysAtDate(){
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 14);
    this.dateOut = nextWeek;
  }
  public formatDateComponent(date:Date){
    return formatDateFunction(date);
  }

}
