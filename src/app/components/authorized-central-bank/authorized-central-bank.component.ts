import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-authorized-central-bank',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './authorized-central-bank.component.html',
  styleUrls: ['./authorized-central-bank.component.scss']
})
export class AuthorizedCentralBankComponent implements OnInit {

  listOffers: any = [
    {
      title: "Comprá dolar oficial",
      description: "Al mejor precio, en segundos y sin restricciones",
      url: "assets/media/authorized-central-bank/dolar.png",
    },
    {
      title: "Conocé Tienda Brubank",
      description: "Ser brubanker ahora tiene más beneficios que nunca.",
      url: "assets/media/authorized-central-bank/brubank-offers.png",
    },
    {
      title: "Viajá a Brasil con Brubank",
      description: "Pagá con Brubank Pix desde la app y olvidate de todo.",
      url: "assets/media/authorized-central-bank/brubank-qr.png",
    }
  ];

  images = [
    'assets/media/authorized-central-bank/carrusel-1.webp',
/*     'assets/media/authorized-central-bank/carrusel-2.webp',
    'assets/media/authorized-central-bank/carrusel-3.webp',
    'assets/media/authorized-central-bank/carrusel-4.webp' */
  ]

  loading : boolean = true;
  sendTransference : boolean = false;
  activeIndex : number = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId : any
  ) { }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
      setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.images.length;
        console.log(this.activeIndex);
      }, 3000);
    }
  }

  setIntervalStyles(){
    setInterval(() =>{
      this.loading = !this.loading;
      this.sendTransference = !this.sendTransference;
    }, 1000);
  }

}
