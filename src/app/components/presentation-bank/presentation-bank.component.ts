import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-bank',
  imports: [CommonModule],
  templateUrl: './presentation-bank.component.html',
  styleUrl: './presentation-bank.component.scss'
})
export class PresentationBankComponent implements OnInit {

  firstAnimation : boolean = true;
  secondAnimation : boolean = false;

  constructor(){}

  ngOnInit() {
  }





}
