import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoginService {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate(){
    console.log('a')
    if(this.authService.isAuth()){
      this.route.navigate(['home']);
      return false;
    }
    return true;
  }
}
