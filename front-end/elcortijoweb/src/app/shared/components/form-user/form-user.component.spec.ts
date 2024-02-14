import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserComponent } from './form-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';
import { AuthServiceStub } from 'src/app/core/services/user-auth/user-auth.service.stub';
import { By } from '@angular/platform-browser';

describe('FormUserComponent', () => {
  let component: FormUserComponent;
  let fixture: ComponentFixture<FormUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUserComponent],
      providers:[{provide: UserAuthService, useClass: AuthServiceStub}],
      imports:[
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(FormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should set file input value', () => {
    const fileInputElement = fixture.debugElement.query(By.css('#fileInput'));
    const file = new File([''], 'filename.txt');
    fileInputElement.nativeElement.files = [file];
    fileInputElement.triggerEventHandler('change', { target: { files: [file] } });
    fixture.detectChanges();
    // Add your assertion here
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
