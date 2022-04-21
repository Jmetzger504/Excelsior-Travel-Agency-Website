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

   password = new FormControl('',Validators.compose([
     Validators.required,
     Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")]));
   

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  ngOnInit(): void {
  }

}
