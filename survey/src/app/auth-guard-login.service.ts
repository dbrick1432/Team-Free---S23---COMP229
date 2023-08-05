import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoginService {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate(){
    if(this.authService.isAuth()){
      this.route.navigate(['home']);
      return false;
    }
    return true;
  }
}
