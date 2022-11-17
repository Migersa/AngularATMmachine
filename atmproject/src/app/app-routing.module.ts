import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlldepositsComponent } from './CreditCard/alldeposits/alldeposits.component';
import { AllwithdrawsComponent } from './CreditCard/allwithdraws/allwithdraws.component';
import { CardComponent } from './CreditCard/card/card.component';
import { CardoperationsComponent } from './CreditCard/cardoperations/cardoperations.component';
import { CreditCardCredencialsComponent } from './CreditCard/credit-card-credencials/credit-card-credencials.component';
import { DepositComponent } from './CreditCard/deposit/deposit.component';
import { WithdrawComponent } from './CreditCard/withdraw/withdraw.component';

const routes: Routes = [



  {

    path: 'CreditCard/creditcardcredencials',
    component: CreditCardCredencialsComponent
  },

  {

    path: 'CreditCard/cardoperations',
    component: CardoperationsComponent
  },

  {

    path: 'CreditCard/deposit',
    component: DepositComponent
  },

  {

    path: 'CreditCard/withdraw',
    component: WithdrawComponent
  },
  {

    path: 'CreditCard/allwithdraws',
    component: AllwithdrawsComponent
  },
  {

    path: 'CreditCard/alldeposits',
    component: AlldepositsComponent
  },

  {

    path: 'CreditCard/card',
    component: CardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
