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
  transferReceived : boolean = false;
  showSectionTransference : boolean = false;
  showTransferReceivedChecked : boolean = false;
  activeIndex : number = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId : any
  ) { }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
      this.setIntervalStyles();
      setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.images.length;
      }, 3000);
    }
  }

  setIntervalStyles(){
    setInterval(() =>{
      if(this.loading && this.sendTransference == false && this.transferReceived == false && this.showTransferReceivedChecked == false){
        this.loading = false;
        this.showSectionTransference = false;
        this.sendTransference = true;
        this.transferReceived = false;
         this.showTransferReceivedChecked = false;
      }else if(this.loading == false && this.sendTransference && this.transferReceived == false && this.showTransferReceivedChecked == false){
        this.loading = false;
        this.sendTransference = false;
        this.showSectionTransference = true;
        this.transferReceived = true;
         this.showTransferReceivedChecked = false;
      }else if(this.loading == false && this.sendTransference == false && this.transferReceived && this.showTransferReceivedChecked == false){
        this.loading = false;
        this.sendTransference = false;
        this.transferReceived = false;
        this.showSectionTransference = true;
        this.showTransferReceivedChecked = true;
      }else if(this.loading == false && this.sendTransference == false && this.transferReceived == false && this.showTransferReceivedChecked){
        this.loading = true;
        this.sendTransference = false;
        this.transferReceived = false;
        this.showSectionTransference = false;
        this.showTransferReceivedChecked = false;
      }
      console.log("Se llama");
    }, 3000);
  }

}
