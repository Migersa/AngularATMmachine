import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { CreditCardService } from '../../Services/creditcard.service';


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  NgForm = NgForm;

  public cardbalance: Number | undefined;
  public cardwithdraw: Number | undefined;


  constructor(public creditcardService: CreditCardService, private router: Router, private fb1: FormBuilder) { }

  ngOnInit(): void {
  }




  onSubmit(form: NgForm) {


    
  

    this.creditcardService.GetCreditCardBalance().subscribe(
        (response: any) => {
         
       

        this.creditcardService.CreditCardBalanceId = response;
     
        this.cardbalance = this.creditcardService.CreditCardBalanceId.balance;

        this.cardwithdraw = this.creditcardService.WithdrawAdd.WithdrawValue;

       

    
        

  
        },
        err => {
          if (err.status == 400)



            console.log(err);

        }





    );

   
 
  

    
    this.creditcardService.AddWithdraw().subscribe(
      (response: any) => {


        if (response == null) {

          window.alert("cant withdraw the balance is lower than the withdraw value");




        
        }

        else {
          this.creditcardService.update1().subscribe(
            (response: any) => {




            }
          );

          window.alert("Your withdraw is done ");
        }
      
      
     
        this.creditcardService.WithdrawDTO = response;
        

        this.router.navigateByUrl('CreditCard/cardoperations');

      },
      err => {
        if (err.status == 400)



          console.log(err);


       


      }


    );
  
  }
  
}
