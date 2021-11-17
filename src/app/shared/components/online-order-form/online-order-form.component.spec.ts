import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineOrderFormComponent } from './online-order-form.component';

describe('OnlineOrderFormComponent', () => {
  let component: OnlineOrderFormComponent;
  let fixture: ComponentFixture<OnlineOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
