import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { AuthServiceStub } from 'src/app/core/services/user-auth/user-auth.service.stub';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { RoomService } from 'src/app/core/services/rooms/room.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RoomServiceStubs } from 'src/app/core/services/rooms/room.service.stubs';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingComponent],
      providers:[
        {provide: BookingService, useClass: AuthServiceStub },
        {provide: RoomService, useClass: RoomServiceStubs },
        {provide: UserAuthService, useClass: AuthServiceStub},

      ],
      imports:[
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
