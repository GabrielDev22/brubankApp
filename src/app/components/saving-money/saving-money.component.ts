import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-saving-money',
  imports: [CommonModule, AngularSvgIconModule, NgbAccordionModule],
  templateUrl: './saving-money.component.html',
  styleUrls: ['./saving-money.component.scss']
})
export class SavingMoneyComponent implements OnInit, OnDestroy {

  lines = new Array(5);
  activeIndex = 0;
  filledIndices: Set<number> = new Set();
  intervalId: any;

  slides = [
    {
      image: 'assets/media/saving-money/burger-king.avif',
      text: "Comé en Burger King con descuentos increibles"
    },
    {
      image: 'assets/media/saving-money/farmacity.webp',
      text: "Disfrutá de tus compras en Farmacity con descuento"
    },
    {
      image: 'assets/media/saving-money/look.avif',
      text: "Aprovechá productos de belleza a menor precio"
    },
    {
      image: 'assets/media/saving-money/axion.avif',
      text: "Cargá nafta todas las semanas con nuestros reintegros"
    },
    {
      image: 'assets/media/saving-money/rex.avif',
      text: "Renová tu hogar con colores nuevos a menor precio"
    }
  ]

  constructor(
    @Inject(PLATFORM_ID) private platformId : any
  ) { }

  ngOnDestroy(){
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    if(isPlatformBrowser(this.platformId)){
      this.intervalId = setInterval(() => {
        this.filledIndices.add(this.activeIndex);
        this.activeIndex++;
        if(this.activeIndex >= this.slides.length){
          this.activeIndex = 0;
          this.filledIndices.clear();
        }
      }, 6000);
    }
  }

  getLineWidth(index: number): string {
  if (this.filledIndices.has(index)) {
    return '100%';
  }
  if (index === this.activeIndex) {
    return '100%';
  }
  return '0%';
}

}
