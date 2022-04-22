import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,ReactiveFormsModule,FormGroup,FormBuilder} from '@angular/forms';
import { GlobalService } from '../services/global.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide:boolean = true;
  registerForm: FormGroup;

  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder,private service: GlobalService) {
    this.registerForm = this.fb.group({
      firstName: ['',[
        Validators.required,
        Validators.minLength(2)
      ]],
      lastName: ['',[
        Validators.required,
        Validators.minLength(2)
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$")
      ]],
      streetAddress: ['',[Validators.required]],
      state: ['',[Validators.required]],
      zipCode: ['',[
        Validators.required,
        Validators.minLength(5),
      ]],
      balance: ['',[
        Validators.required,
        Validators.min(0),
        
      ]],
    });

    this.registerForm.valueChanges.subscribe();
  }


  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get streetAddress() {
    return this.registerForm.get('streetAddress');
  }

  get state() {
    return this.registerForm.get('state');
  }

  get zipCode() {
    return this.registerForm.get('zipCode');
  }

  get balance() {
    return this.registerForm.get('balance');
  }
  
  register() {
    this.service.register(this.registerForm.get('firstName')?.value,
    this.registerForm.get('lastName')?.value,
    this.registerForm.get("email")?.value,
    this.registerForm.get('password')?.value,
    this.registerForm.get("streetAddress")?.value,
    this.registerForm.get("state")?.value,
    this.registerForm.get("zipCode")?.value,
    this.registerForm.get("balance")?.value);
  }
}
