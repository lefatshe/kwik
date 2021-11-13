import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slide-price-calculator',
  templateUrl: './slide-price-calculator.component.html',
  styleUrls: ['./slide-price-calculator.component.scss']
})
export class SlidePriceCalculatorComponent implements OnInit {
  pricingSliders: any

  constructor() {

  }

  ngOnInit(): void {
    this.pricingSliders = document.querySelectorAll(".pricing-slider")
  }

  // https://codesandbox.io/s/html-pricing-slider-55sxn?from-embed=&file=/pricing-slider.js:733-1567
  slide() {
    if (this.pricingSliders.length > 0) {
      for (let i = 0; i < this.pricingSliders.length; i++) {
        const pricingSlider = this.pricingSliders[i];

        // Build the input object
        const pricingInput = {
          el: pricingSlider.querySelector("input")
        };

        console.log(pricingInput)

      }
    }
  }

}
