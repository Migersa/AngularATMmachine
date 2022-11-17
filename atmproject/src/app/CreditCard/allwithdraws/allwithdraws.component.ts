import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WithdrawDTO } from '../../Models/WithdrawDTO.module';
import { CreditCardService } from '../../Services/creditcard.service';

@Component({
  selector: 'app-allwithdraws',
  templateUrl: './allwithdraws.component.html',
  styleUrls: ['./allwithdraws.component.css']
})
export class AllwithdrawsComponent implements OnInit {

  withdraws: WithdrawDTO[] = [];
  public cardId: string | undefined;
  constructor(public creditcardService: CreditCardService, private router: Router) { }

  ngOnInit(): void {





    this.creditcardService.GetAllWithdrawsCards().subscribe(response => {

      this.cardId = localStorage.getItem('cardid')?.replace('"', '');
      this.cardId = this.cardId?.replace('"', '');



      this.withdraws = response;
      for (let WithdrawDTO of this.withdraws) {


      }

      console.log(this.withdraws);
      console.log(response);
    }
    )



  }

}
