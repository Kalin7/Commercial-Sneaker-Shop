import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByRegisteredUserComponent } from './order-by-registered-user.component';

describe('OrderByRegisteredUserComponent', () => {
  let component: OrderByRegisteredUserComponent;
  let fixture: ComponentFixture<OrderByRegisteredUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByRegisteredUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByRegisteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
