import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountClientComponent } from './count-client.component';

describe('CountClientComponent', () => {
  let component: CountClientComponent;
  let fixture: ComponentFixture<CountClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountClientComponent]
    });
    fixture = TestBed.createComponent(CountClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
