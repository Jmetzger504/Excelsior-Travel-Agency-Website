import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  _http:HttpClient;
  loggedIn:boolean;

  constructor(private _httpRef:HttpClient) {
    this._http = _httpRef;
    this.loggedIn = false;
   }
   
  canActivate(): boolean {
    if(this.loggedIn)
      return true;
    return false;
  }

   Customer: any  = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      streetAddress: "",
      state: "",
      zipCode: 0,
      balance: 0};

   cruiseTickets = [];
   cruiseTicket = {id: 0, custId: 0, shipId: 0, rooms: 0,childGuests: 0,adultGuests: 0,totalCost: 0}
   cruises = [];
   itineraries = [];
   register(firstName:string,lastName:string,email:string,password:string,streetAddress:string,state:string,zipCode:number,balance:number) {
     this.Customer.firstName = firstName;
     this.Customer.lastName = lastName;
     this.Customer.email = email;
     this.Customer.password = password;
     this.Customer.streetAddress = streetAddress;
     this.Customer.state = state;
     this.Customer.zipCode = zipCode;
     this.Customer.balance = balance;

     //http request to post via api
     //If it exists change the DOM to reflect it.
   }

   login(email?:string,password?:string) {
     return this._http.get('https://localhost:44356/api/Customer/' + email + "/" + password);
   }


}
