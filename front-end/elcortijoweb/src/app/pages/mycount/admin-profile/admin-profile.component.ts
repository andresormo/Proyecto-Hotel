import { Component, Input, OnInit } from '@angular/core';
import { BookingI } from 'src/app/core/services/booking/models/booking.interface';
import { formatDateFunction } from '../functions/functios';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent{
  @Input() public bookingsToShow?: BookingI[];

  public dateIn: Date = new Date();
  public dateOut?: Date;
  public idValue: string = '';
  public modalSwitch?: boolean;

  constructor(){
    this.addDaysAtDate();
    console.log(localStorage.getItem('preBooking'));

  }

  public openModal(){
    this.modalSwitch = true
  }


  public getAnswer(answer: boolean){
    this.modalSwitch = answer;
  }

  public addDaysAtDate(){
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 14);
    this.dateOut = nextWeek;
  }
  public formatDateComponent(date:Date){
    return formatDateFunction(date);
  }

  public resetInput(condition: string){
    if(condition === 'dateIn'){
      this.dateIn = new Date();
      this.addDaysAtDate()
    } else if(condition === 'id'){
      this.idValue = '';
    }
  }

}
