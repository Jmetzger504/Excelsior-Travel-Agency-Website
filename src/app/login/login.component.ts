import { Component, OnInit } from '@angular/core';
import {FormControl,Validators,ReactiveFormsModule, FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean = true;
  loginForm: FormGroup;

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$")
      ]],
    })
   }

  login() {

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
