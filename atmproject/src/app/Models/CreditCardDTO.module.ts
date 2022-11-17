import { Binary } from "@angular/compiler";

export class CreditCardDTO {

  cardId: String | undefined;


  cardNumber:Binary | undefined;

  pin: Binary | undefined;
  balance: Number | undefined;

  expirationDate: Date | undefined;

  nameOfOwner: String | undefined;

}
