import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  service:GlobalService;
  locationForm:FormGroup;
  dateForm:FormGroup;
  locations: any;

  cruises:any = [{From: "New Orleans, Louisiana",
  To: "Cozumel, Mexico",
  shipName: "Boat",
  cruiseLine: "Carnival",
  dayLength: 5,
  rooms: [{roomType: "The Brig", available: 100, total: 500, roomPrice: 0},
      {roomType: "Suite", available: 30, total: 30,roomPrice: 5000}],
  departureDate: [new Date("2022-05-05 10:00 AM")],
  arrivalDate: [new Date("2022-05-10 10:00 AM")],
  pricePerAdult: 500,
  pricePerChild: 100,
  itinerary: [{day: 1,city: "New Orleans",country: "Louisiana, United States",portTime: "10:00AM"},
              {day: 2, city: "At Sea", country: "",portTime:""},
              {day: 3, city: "Cozumel", country: "Mexico",portTime:"10:00AM"},
              {day: 4, city: "At Sea", country: "",portTime:""},
              {day: 5,city: "New Orleans",country: "Louisiana, United States",portTime: "4:00PM"}
            ]
}];
  


  constructor(serviceRef: GlobalService,private fb: FormBuilder) {
    this.service = serviceRef;
    this.locationForm = this.fb.group({
      formLocations: ['',Validators.required]
    })
    this.service.getLocations().subscribe(data => {
      this.locations = data;
     });
     this.dateForm = this.fb.group({
       formDates: ['',Validators.required]
     })
     
   }


  get formLocations() {
    return this.locationForm.get('formLocations');
  }

  searchByLocation() {
  
  }

  ngOnInit(): void {
  }

}
