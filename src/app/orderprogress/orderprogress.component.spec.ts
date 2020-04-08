import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderprogressComponent } from './orderprogress.component';

describe('OrderprogressComponent', () => {
  let component: OrderprogressComponent;
  let fixture: ComponentFixture<OrderprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
