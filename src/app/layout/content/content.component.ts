import { Component } from '@angular/core';
import { PresentationBankComponent } from "../../components/presentation-bank/presentation-bank.component";
import { AuthorizedCentralBankComponent } from "../../components/authorized-central-bank/authorized-central-bank.component";
import { InvestmentsComponent } from '../../components/investments/investments.component';
import { HeaderComponent } from '../header/header.component';
import { SavingMoneyComponent } from "../../components/saving-money/saving-money.component";

@Component({
  selector: 'app-content',
  imports: [HeaderComponent, PresentationBankComponent, AuthorizedCentralBankComponent, InvestmentsComponent, SavingMoneyComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
