import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterLink} from '@angular/router';
import { UserAuthService } from '../../services/user-auth/user-auth.service';
import { AuthServiceStub } from '../../services/user-auth/user-auth.service.stub';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports:[
        RouterLink,
        RouterTestingModule,
      ],
      providers:[ {provide: UserAuthService, useClass: AuthServiceStub} ]
    });


    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
