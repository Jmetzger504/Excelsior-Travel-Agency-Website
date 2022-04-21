import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'myaccount',component: MyaccountComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'home',component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'aboutus',component: AboutusComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }