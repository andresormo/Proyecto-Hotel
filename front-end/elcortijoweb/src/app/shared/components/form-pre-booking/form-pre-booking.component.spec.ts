import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreBookingComponent } from './form-pre-booking.component';

describe('FormPreBookingComponent', () => {
  let component: FormPreBookingComponent;
  let fixture: ComponentFixture<FormPreBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPreBookingComponent]
    });
    fixture = TestBed.createComponent(FormPreBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
