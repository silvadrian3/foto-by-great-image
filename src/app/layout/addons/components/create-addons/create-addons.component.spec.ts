import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddonsComponent } from './create-addons.component';

describe('CreateAddonsComponent', () => {
  let component: CreateAddonsComponent;
  let fixture: ComponentFixture<CreateAddonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAddonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
