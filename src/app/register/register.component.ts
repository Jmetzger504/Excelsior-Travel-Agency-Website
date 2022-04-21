import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide:boolean;
 
  constructor() {
    this.hide = true;
   }

  firstName = new FormControl('',Validators.compose([Validators.required,Validators.minLength(2)]));
  lastName = new FormControl('',Validators.compose([Validators.required,Validators.minLength(2)]));
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',Validators.compose([
     Validators.required,
     Validators.minLength(8)]));
   
  zipCode = new FormControl('',Validators.compose([Validators.required,Validators.min(501),Validators.max(99950),Validators.minLength(5)]))

  getZipCodeErrorMessage() {
    if(this.zipCode.hasError('required'))
      return 'You must enter a zip code.'
    return this.zipCode.hasError('min' || 'max' || 'minLength(5)') ? 'Please enter a valid zip code.' : '';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if(this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return 'Must be at least 8 characters.';
  }

  getFirstNameErrorMessage() {
    return 'Please enter a valid name (2 characters or more).';
  }
  
  getLastNameErrorMessage() {
    return 'Please enter a valid name (2 characters or more).';
  }

  ngOnInit(): void {
  }

}
