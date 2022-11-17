import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditCardService } from '../../Services/creditcard.service';

@Component({
  selector: 'app-cardoperations',
  templateUrl: './cardoperations.component.html',
  styleUrls: ['./cardoperations.component.css']
})
export class CardoperationsComponent implements OnInit {

  public cardbalance: Number | undefined;
  public cardwithdraw: Number | undefined;
  constructor(public creditcardService: CreditCardService, private router: Router, private fb1: FormBuilder) { }

  ngOnInit(): void {
  }
  onLogout() {
    localStorage.removeItem('cardid');
    localStorage.removeItem('cardnumber');
    
    this.router.navigate(['/CreditCard/creditcardcredencials']);
  }
  onLogout1() {






    this.creditcardService.GetCreditCardBalance().subscribe(
      (response: any) => {
      
     

        this.creditcardService.CreditCardBalanceId = response;
     
        this.cardbalance = this.creditcardService.CreditCardBalanceId.balance;


        alert("balanca jote eshte " + this.creditcardService.CreditCardBalanceId.balance);
  
      },
      err => {
        if (err.status == 400)



    
          console.log(err);



      }


    );

  }

    Deposit(){

      this.router.navigate(['/CreditCard/deposit']);

    }


  }

