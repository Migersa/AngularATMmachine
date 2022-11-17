import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardCredencialsComponent } from './CreditCard/credit-card-credencials/credit-card-credencials.component';
import { CardoperationsComponent } from './CreditCard/cardoperations/cardoperations.component';
import { WithdrawComponent } from './CreditCard/withdraw/withdraw.component';
import { DepositComponent } from './CreditCard/deposit/deposit.component';
import { DepositanothercardComponent } from './CreditCard/depositanothercard/depositanothercard.component';
import { AllwithdrawsComponent } from './CreditCard/allwithdraws/allwithdraws.component';
import { AlldepositsComponent } from './CreditCard/alldeposits/alldeposits.component';
import { CardComponent } from './CreditCard/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';//

const approutes: Routes = [
  {

    path: 'CreditCard/cardoperations',
    component: CardoperationsComponent
  }, 
  { path: '', component: AppComponent }
];


@NgModule({
  declarations: [
    CreditCardCredencialsComponent,
    CardoperationsComponent,
    WithdrawComponent,
    DepositComponent,
    DepositanothercardComponent,
    AllwithdrawsComponent,
    AlldepositsComponent,
    CardComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
