import { Component } from '@angular/core';
import { PresentationBankComponent } from "../../components/presentation-bank/presentation-bank.component";
import { AuthorizedCentralBankComponent } from "../../components/authorized-central-bank/authorized-central-bank.component";

@Component({
  selector: 'app-content',
  imports: [PresentationBankComponent, AuthorizedCentralBankComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
