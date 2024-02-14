import { AuthServiceStub } from './../../../core/services/user-auth/user-auth.service.stub';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateRoomsComponent } from './form-create-rooms.component';
import { RoomService } from 'src/app/core/services/rooms/room.service';
import { BedsService } from 'src/app/core/services/beds/beds.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomServiceStubs } from 'src/app/core/services/rooms/room.service.stubs';

describe('FormCreateRoomsComponent', () => {
  let component: FormCreateRoomsComponent;
  let fixture: ComponentFixture<FormCreateRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateRoomsComponent],
      providers:[
        {provide: RoomService, useClass: AuthServiceStub},
        {provide: BedsService, useClass: AuthServiceStub}
      ],
      imports:[
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(FormCreateRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
