import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  _http:HttpClient;


  constructor(private _httpRef:HttpClient) {
    this._http = _httpRef;
   }
   firstName? = "";
   lastName? = "";
   email? = "";
   password? = "";
   streetAddress? = "";
   state? = "";
   zipCode? = 0;
   balance? = 0;

   cruiseTickets = [];
   cruiseTicket = {id: 0, custId: 0, shipId: 0, rooms: 0,childGuests: 0,adultGuests: 0,totalCost: 0}
   cruises = [];
   itineraries = [];
   register(firstName?:string,lastName?:string,email?:string,password?:string,streetAddress?:string,state?:string,zipCode?:number,balance?:number) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.email = email;
     this.streetAddress = streetAddress;
     this.state = state;
     this.zipCode = zipCode;
     this.balance = balance;

     //http request to post via api
     //If it exists change the DOM to reflect it.
   }

   login(email?:string,password?:string) {
    //http request for count of email = email and pass = pass.
    //If successful, http request for the rest of the details. 
   }


}
