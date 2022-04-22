import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor() { }

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
