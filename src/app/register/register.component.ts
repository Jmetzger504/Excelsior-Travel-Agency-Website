import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide:boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() {
    this.hide = true;
   }

   

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  ngOnInit(): void {
  }

}
