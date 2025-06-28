import { Component } from '@angular/core';
import { PresentationBankComponent } from "../../components/presentation-bank/presentation-bank.component";
import { AuthorizedCentralBankComponent } from "../../components/authorized-central-bank/authorized-central-bank.component";
import { InvestmentsComponent } from '../../components/investments/investments.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-content',
  imports: [HeaderComponent, PresentationBankComponent, AuthorizedCentralBankComponent, InvestmentsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
