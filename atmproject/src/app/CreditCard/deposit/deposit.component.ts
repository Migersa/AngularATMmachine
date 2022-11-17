import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditCardService } from '../../Services/creditcard.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
  providers: [CreditCardService]
})
export class DepositComponent implements OnInit {
  NgForm = NgForm;

  constructor(public creditcardService: CreditCardService, private router: Router, private fb1: FormBuilder) { }

  ngOnInit(): void {
  }




  onSubmit(form: NgForm) {

    this.creditcardService.AddDeposit().subscribe(
      (response: any) => {



        alert("Your deposit is done ");
    
        this.creditcardService.DepositDTO = response;


         this.router.navigateByUrl('CreditCard/cardoperations');

      },
      err => {
        if (err.status == 400)



          console.log(err);




      }


    );



  }
}
