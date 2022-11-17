import { Binary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConversionUtils } from 'turbocommons-ts';

import { CreditCardDTO } from '../../Models/CreditCardDTO.module';
import { CreditCardService } from '../../Services/creditcard.service';
@Component({
  selector: 'app-credit-card-credencials',
  templateUrl: './credit-card-credencials.component.html',
  styleUrls: ['./credit-card-credencials.component.css']
})
export class CreditCardCredencialsComponent implements OnInit {
  NgForm = NgForm;

  public string = new String();
  

  constructor(public creditcardService: CreditCardService, private router: Router, private fb1: FormBuilder) { }
  
  ngOnInit(): void {
  }
 

  onSubmit(form: NgForm) {
    /*
    console.log("ttt");
    this.creditcardService.creditCardToken().subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        console.log(response.token);
        console.log("token");

        alert("kk");

      },
      err => {
        if (err.status == 400)
          // console.log(this.employeesService.Login(form.value));



          console.log(err);

      }


    );
    */
    
    this.creditcardService.controllCreditCard().subscribe(
      (response: any) => {
 
        
        if (response == null) {


          alert("credit card not found");
        }
        this.creditcardService.CreditCardDTO = response;
       
        this.creditcardService.CardId = this.creditcardService.CreditCardDTO.cardId;

        localStorage.setItem('cardid', JSON.stringify(this.creditcardService.CardId));
        
        this.creditcardService.CardNumber = ConversionUtils.base64ToString(JSON.stringify(this.creditcardService.CreditCardDTO.cardNumber));




 

        localStorage.setItem('cardnumber', JSON.stringify(this.creditcardService.CardNumber));
       
 
        this.router.navigateByUrl('CreditCard/cardoperations');

      },
      err => {
        if (err.status == 400)
         
       

          console.log(err);




      }
   
       


    );


  }
}
