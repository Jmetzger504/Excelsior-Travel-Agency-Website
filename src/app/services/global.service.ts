import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  _http:HttpClient;
  loggedIn:boolean;
  destinations = [];

  Customer: any  = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    streetAddress: "",
    state: "",
    zipCode: 0,
    balance: 0};

 cruiseTickets = [];
 cruiseTicket = {id: 0, custId: 0, shipId: 0, rooms: 0,childGuests: 0,adultGuests: 0,
  totalCost: 0}
 cruises = [];
 itineraries = [];

  connectionString: string = "https://localhost:44356/api/"
  constructor(private _httpRef:HttpClient) {
    this._http = _httpRef;
    this.loggedIn = false;
   }
   
  canActivate(): boolean {
    if(this.loggedIn)
      return true;
    return false;
  }

  

   
   register(firstName:string,lastName:string,email:string,password:string,
    streetAddress:string, city:string,state:string,zipCode:number,
    balance:number) {


     this.Customer = {Id: 0,firstName:firstName,lastName:lastName,email:email,password:password,
      streetAddress:streetAddress,city:city,state:state,zipCode:zipCode,balance:balance}
      return this._http.post(this.connectionString + "Customer/Register",this.Customer);
     //http request to post via api
     //If it exists change the DOM to reflect it.
   }

   login(email?:string,password?:string) {
     return this._http.get(this.connectionString + 'Customer/' + email + "/" + password);
   }

  getLocations() {
    return this._http.get(this.connectionString + 'CruiseShip/getLocations');
  }

  searchByLocation(location:string) {
    return this._http.get(this.connectionString + 'CruiseShip/SearchByLocation' + location);
  }

}
