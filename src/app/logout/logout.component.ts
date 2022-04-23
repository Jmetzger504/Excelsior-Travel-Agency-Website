import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  service:GlobalService;

  constructor(serviceRef:GlobalService) {
    console.log("constructor");
    this.service = serviceRef;
    this.service.loggedIn = false;
    this.service.Customer = null;
   }

  ngOnInit(): void {
    console.log("onInit");
  }

}
