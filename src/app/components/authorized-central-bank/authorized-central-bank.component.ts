import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
