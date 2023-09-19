import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateRoomsComponent } from './form-create-rooms.component';

describe('FormCreateRoomsComponent', () => {
  let component: FormCreateRoomsComponent;
  let fixture: ComponentFixture<FormCreateRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateRoomsComponent]
    });
    fixture = TestBed.createComponent(FormCreateRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
