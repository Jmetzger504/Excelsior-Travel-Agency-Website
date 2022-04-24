import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import { Voyage } from '../models/voyage.model';

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
  Voyages: Voyage[] =[];
  
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
   this.service.getVoyages().subscribe(data => {
     this.service.Voyages = data;
     console.log(this.service.Voyages);
   });
   }


  get formLocations() {
    return this.locationForm.get('formLocations');
  }

  searchByLocation() {
  
  }

  ngOnInit(): void {
  }

}
