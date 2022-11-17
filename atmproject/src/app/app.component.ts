import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atmproject';
    showMenu: boolean | undefined;
    location: any;


  constructor(router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showMenu = event.url !== "/CreditCard/creditcardcredencials";
        this.showMenu = event.url !== "/CreditCard/alldeposits";
        this.showMenu = event.url !== "/CreditCard/allwithdraws";
        this.showMenu = event.url !== "/CreditCard/deposits";
        this.showMenu = event.url !== "/CreditCard/withdraws";
        this.showMenu = event.url !== "/CreditCard/card";


        if (router.url === '/CreditCard/creditcardcredencials') {
          this.showMenu = false;
       
        }



      }

    });
  }

}
