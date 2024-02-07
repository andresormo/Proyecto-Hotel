import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  public idValue: string = '';
  public modalSwitch?: boolean;

  public idBookingToShow?: string;


  constructor(){
    this.addDaysAtDate();
  }

  public openModal(){
    this.modalSwitch = true
  }


  public getAnswer(answer: boolean){
    this.modalSwitch = answer;
  }

  public showDetailModal(id:string){
    this.idBookingToShow = id;
    console.log(this.idBookingToShow);

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
