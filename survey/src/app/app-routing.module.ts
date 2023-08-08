import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyCreateComponent } from './survey-create/survey-create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuardLoginService } from './auth-guard-login.service';

const routes: Routes = [
  {path:'home', component:HomeComponent, },
  {path:'', component:HomeComponent},
  {path:'survey', component:SurveyListComponent},
  {path:'survey/create', component:SurveyCreateComponent },
  {path:'users/login', component:LoginComponent},
  {path:'users/register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
