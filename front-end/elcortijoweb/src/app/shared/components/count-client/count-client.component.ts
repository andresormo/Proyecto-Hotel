import { Component } from '@angular/core';

@Component({
  selector: 'app-count-client',
  templateUrl: './count-client.component.html',
  styleUrls: ['./count-client.component.scss'],
})
export class CountClientComponent {
  public adultPerson: number = 1;
  public kidPerson: number = 1;
  public addPerson($event: Event, element: 'adult' | 'kid') {
    if (element === 'adult') {
      this.adultPerson++;
    } else if (element === 'kid') {
      this.kidPerson++;
    }
  }

  public quitPerson($event: Event, element: 'adult' | 'kid') {
    if (element === 'adult' && this.adultPerson > 0) {
      this.adultPerson--;
    } else if (element === 'kid' && this.kidPerson > 0) {
      this.kidPerson--;
    }
  }
}
