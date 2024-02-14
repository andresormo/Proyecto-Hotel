import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';
import { AuthServiceStub } from 'src/app/core/services/user-auth/user-auth.service.stub';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers:[ {provide: UserAuthService, useClass: AuthServiceStub}],
      imports:[
        RouterLink,
        RouterModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]

    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
