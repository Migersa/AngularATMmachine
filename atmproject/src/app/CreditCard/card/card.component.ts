import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCardDTO } from '../../Models/CreditCardDTO.module';
import { CreditCardService } from '../../Services/creditcard.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: CreditCardDTO[] = [];
  public cardId: string | undefined;
  constructor(public creditcardService: CreditCardService, private router: Router) { }

  ngOnInit(): void {




    this.creditcardService.GetAllCreditCards().subscribe(response => {

      this.cardId = localStorage.getItem('cardid')?.replace('"', '');
      this.cardId = this.cardId?.replace('"', '');



      this.card = response;
      for (let CreditCardDTO of this.card) {


      }

   
    }
    )
  }

}
