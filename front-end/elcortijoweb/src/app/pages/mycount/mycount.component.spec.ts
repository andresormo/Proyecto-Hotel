import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycountComponent } from './mycount.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceStub } from 'src/app/core/services/user-auth/user-auth.service.stub';
import { BookingService } from 'src/app/core/services/booking/booking.service';
import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';

describe('MycountComponent', () => {
  let component: MycountComponent;
  let fixture: ComponentFixture<MycountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycountComponent],
      imports:[
      ],
      providers:[
        {provide: BookingService, useClass: AuthServiceStub},
        {provide: UserAuthService, useClass: AuthServiceStub}
      ]
    });
    fixture = TestBed.createComponent(MycountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
