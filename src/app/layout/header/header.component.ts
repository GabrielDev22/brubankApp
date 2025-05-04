import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

export enum SubMenuItem{
  PERSONAS = "PERSONAS",
  COMPANY = "COMPANY"
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, InlineSVGModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  showMegaMenu : boolean = false;
  showMegaMenuCompany : boolean = false;

  constructor(
    private cd : ChangeDetectorRef
  ){}

  ngOnInit() {

  }

  mouseEventSubMenu(action: 'enter' | 'leave', item : string){
    if(action === 'enter'){
      if(item == SubMenuItem.PERSONAS){
        this.showMegaMenu = true;
        this.showMegaMenuCompany = false;
      }
      else if(item == SubMenuItem.COMPANY){
        this.showMegaMenuCompany = true;
        this.showMegaMenu = false;
      }
    } else{
      if (item === SubMenuItem.PERSONAS) {
        this.showMegaMenu = false;
      } else if (item === SubMenuItem.COMPANY) {
        this.showMegaMenuCompany = false;
      }
    }
    this.cd.markForCheck();
  }

  get SubMenuItem(){
    return SubMenuItem;
  }

}
