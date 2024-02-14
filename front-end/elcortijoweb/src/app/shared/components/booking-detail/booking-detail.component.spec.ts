import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailComponent } from './booking-detail.component';
import { AuthServiceStub } from 'src/app/core/services/user-auth/user-auth.service.stub';
import { BookingService } from 'src/app/core/services/booking/booking.service';

describe('BookingDetailComponent', () => {
  let component: BookingDetailComponent;
  let fixture: ComponentFixture<BookingDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingDetailComponent],
      providers:[{provide: BookingService, useClass: AuthServiceStub }]
    });
    fixture = TestBed.createComponent(BookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
