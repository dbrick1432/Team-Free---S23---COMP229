import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate(){
    if(this.authService.isAuth()){
      return true;
    }
    this.route.navigate(['useres/login']);
    return false;
  }
}	

