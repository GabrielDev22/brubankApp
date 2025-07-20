import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-presentation-bank',
  imports: [CommonModule],
  templateUrl: './presentation-bank.component.html',
  styleUrl: './presentation-bank.component.scss'
})
export class PresentationBankComponent implements OnInit {

  firstAnimation : boolean = true;
  secondAnimation : boolean = false;

  constructor(
     @Inject(PLATFORM_ID) private platformId : any
  ){}

  ngOnInit() {
     if(isPlatformBrowser(this.platformId)){
      setInterval(() => {
        this.animationSet();
      }, 5000);
    }
  }

  animationSet(){
    this.firstAnimation = !this.firstAnimation;
    this.secondAnimation = !this.secondAnimation;
  }





}
