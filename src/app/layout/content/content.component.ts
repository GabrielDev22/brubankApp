import { Component } from '@angular/core';
import { PresentationBankComponent } from "../../components/presentation-bank/presentation-bank.component";

@Component({
  selector: 'app-content',
  imports: [PresentationBankComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
