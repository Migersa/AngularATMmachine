import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepositDTO } from '../../Models/DepositDTO.module';
import { CreditCardService } from '../../Services/creditcard.service';

@Component({
  selector: 'app-alldeposits',
  templateUrl: './alldeposits.component.html',
  styleUrls: ['./alldeposits.component.css']
})
export class AlldepositsComponent implements OnInit {


  deposits: DepositDTO[] = [];
  public cardId: string | undefined;
  constructor(public creditcardService: CreditCardService, private router: Router) { }

  ngOnInit(): void {



    this.creditcardService.GetAllDeposit().subscribe(response => {

        this.cardId = localStorage.getItem('cardid')?.replace('"', '');
        this.cardId = this.cardId?.replace('"', '');

      console.log("cardif");
      console.log(this.cardId);
        this.deposits = response;
        for (let DepositDTO of this.deposits) {
       

        }

        console.log(this.deposits);
      console.log(response);



      console.log("card numberr" + localStorage.getItem('cardnumber')?.replace(/\\u([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])/g, ""));
     
      }
      )
  }

}
