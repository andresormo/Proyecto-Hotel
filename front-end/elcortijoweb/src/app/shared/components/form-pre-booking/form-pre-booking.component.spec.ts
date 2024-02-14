import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreBookingComponent } from './form-pre-booking.component';
import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';
import { AuthServiceStub } from 'src/app/core/services/user-auth/user-auth.service.stub';
import { RoomService } from 'src/app/core/services/rooms/room.service';
import { RoomServiceStubs } from 'src/app/core/services/rooms/room.service.stubs';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormPreBookingComponent', () => {
  let component: FormPreBookingComponent;
  let fixture: ComponentFixture<FormPreBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPreBookingComponent],
      providers:[
        {provide: UserAuthService, useClass: AuthServiceStub},
        {provide: RoomService, useClass: RoomServiceStubs}
      ],
      imports:[
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(FormPreBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
