import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePriceCalculatorComponent } from './slide-price-calculator.component';

describe('SlidePriceCalculatorComponent', () => {
  let component: SlidePriceCalculatorComponent;
  let fixture: ComponentFixture<SlidePriceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidePriceCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePriceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
