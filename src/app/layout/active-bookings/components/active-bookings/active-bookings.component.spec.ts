import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBookingsComponent } from './active-bookings.component';

describe('ActiveBookingsComponent', () => {
  let component: ActiveBookingsComponent;
  let fixture: ComponentFixture<ActiveBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
