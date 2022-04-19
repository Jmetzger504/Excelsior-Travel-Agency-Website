import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PackagesComponent } from './packages/packages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyaccountComponent,
    RegisterComponent,
    HomeComponent,
    AboutusComponent,
    NotfoundComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
