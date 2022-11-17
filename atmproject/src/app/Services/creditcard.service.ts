import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable, Input, Output } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CreditCardDTO } from '../Models/CreditCardDTO.module';

import { environment } from '../../environments/environment';


import { DepositDTO } from '../Models/DepositDTO.module';
import { WithdrawDTO } from '../Models/WithdrawDTO.module';
import { CreditCardId } from '../Models/CreditCardId.module';
import { CreditCardCardNumberPin } from '../Models/CreditCardCardNumberPin.module';
import { DepositAdd } from '../Models/DepositAdd.module';
import { WithdrawAdd } from '../Models/WithdrawAdd.module';
import { CreditCardBalanceId } from '../Models/CreditCardBalanceId.module';
@Injectable({
  providedIn: 'root'
})


export class CreditCardService {
 public CardId1: String | undefined;

  public CardId: String | undefined;

  public CardNumber!: any;

  public CardNumber1: String | undefined;
  constructor(private http: HttpClient, private errorHandler: ErrorHandler, private fb: FormBuilder, private router: Router) {
    this.CardId;
    this.CardNumber;

  }


   CreditCardId: CreditCardId = new CreditCardId();
   CreditCardCardNumberPin: CreditCardCardNumberPin = new CreditCardCardNumberPin();
  public CreditCardDTO: CreditCardDTO = new CreditCardDTO();

CreditCardBalanceId: CreditCardBalanceId = new CreditCardBalanceId();
  DepositAdd: DepositAdd = new DepositAdd();

   DepositDTO: DepositDTO = new DepositDTO();
 WithdrawAdd: WithdrawAdd = new WithdrawAdd();
 WithdrawDTO: WithdrawDTO = new WithdrawDTO();
  readonly apiBaseURL = environment.apiBaseURL;

  public controllCreditCard(): Observable<CreditCardDTO> {
    console.log("objekti + id card");
    console.log(this.CreditCardCardNumberPin);

    this.CardId1 = this.CreditCardCardNumberPin.CardNumber;

    console.log("credit dtoo1" + this.CardId1);
    this.creditCardToken().subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        console.log(response.token);
        console.log("token");

      
         
      },
      err => {
        if (err.status == 400)
       

          console.log(err);

      }


    );
   
    return this.http.post<CreditCardDTO>(this.apiBaseURL + '/CreditCard/ControllCreditCard', this.CreditCardCardNumberPin).pipe();

  }


  public creditCardToken(): Observable<String> {

    return this.http.post<String>(this.apiBaseURL +'/CreditCard/CreditCardToken', this.CreditCardCardNumberPin).pipe();

  }


  public AddDeposit(): Observable<DepositDTO> {


    this.CardId = localStorage.getItem('cardid')?.replace('"', '');
    this.CardId = this.CardId?.replace('"', '');


    this.CardNumber = localStorage.getItem('cardnumber')?.replace(/\\u([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])/g, "");
   this.CardNumber = this.CardNumber?.replace('"', '');


      console.log(this.CardNumber + "karta ");
    this.DepositAdd.CardId = this.CardId;
    this.DepositAdd.CardNumber = this.CardNumber;







    this.update().subscribe(
      (response: any) => {


 
        console.log(response);


      }


    );

    return this.http.post<DepositDTO>(this.apiBaseURL + '/Deposit/AddDepositCard', this.DepositAdd);
  }


  public update(): Observable<any> {

    return this.http.post<any>(this.apiBaseURL + '/Deposit/UpdateBalance', this.DepositAdd);
  }

  public update1(): Observable<any> {

    return this.http.post<any>(this.apiBaseURL + '/Withdraw/UpdateBalance1', this.WithdrawAdd);
  }

  public AddWithdraw(): Observable<WithdrawDTO> {

    this.CardId = localStorage.getItem('cardid')?.replace('"', '');
    this.CardId = this.CardId?.replace('"', '');


    this.CardNumber = localStorage.getItem('cardnumber')?.replace('"', '');
    this.CardNumber = this.CardNumber?.replace('"', '');


    this.WithdrawAdd.CardId = this.CardId;
    this.GetCreditCardBalance().subscribe(
      (response: any) => {

        console.log(response);


        this.CreditCardBalanceId = response;
     
       
      },
      err => {
        if (err.status == 400)



          console.log(err);

      }


    );

    return this.http.post<WithdrawDTO>(this.apiBaseURL + '/Withdraw/TakeWithdrawCard', this.WithdrawAdd);
  }

  public GetAllWithdrawsCards(): Observable<WithdrawDTO[]> {

    console.log("credit dto");
   
    console.log("credit dtoo1" + this.CardId1);
    return this.http.get<WithdrawDTO[]>(this.apiBaseURL + '/Withdraw/GetAllWithdraws');
  }

  public GetAllCreditCards(): Observable<CreditCardDTO[]> {

    return this.http.get<CreditCardDTO[]>(this.apiBaseURL + '/CreditCard/GetAllCreditCards');
  }

  public GetAllDeposit(): Observable<DepositDTO[]> {

    return this.http.get<DepositDTO[]>(this.apiBaseURL + '/Deposit/GetAllDeposit');
  }

  public GetCreditCardBalance(): Observable<CreditCardBalanceId> {


    this.CardId = localStorage.getItem('cardid')?.replace('"', '');
    this.CardId = this.CardId?.replace('"', '');
    this.CreditCardId.CardId = this.CardId;

    return this.http.post<CreditCardBalanceId>(this.apiBaseURL + '/CreditCard/GetCreditCardBalance', this.CreditCardId);
  }
  

}





