import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBookingComponent } from './confirm-booking.component';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { AuthServiceStub } from 'src/app/core/services/user-auth/user-auth.service.stub';

describe('ConfirmBookingComponent', () => {
  let component: ConfirmBookingComponent;
  let fixture: ComponentFixture<ConfirmBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmBookingComponent],
      providers:[
        {provide: BookingService, useClass: AuthServiceStub}
      ]
    });
    fixture = TestBed.createComponent(ConfirmBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
