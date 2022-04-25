import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  service:GlobalService

  constructor(serviceRef:GlobalService) {
    this.service = serviceRef;
   }

  ngOnInit(): void {
  }

  firstName? = "";
   lastName? = "";
   email? = "";
   password? = "";
   streetAddress? = "";
   state? = "";
   zipCode? = 0;
   balance? = 0;

}
