import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate() : Observable<boolean>{
    return this.authService.getLoginStatus().pipe(
      map(data => {
        if (data === true){
          return true
        }
        this.route.navigate(['users/login']);
        return false
    }))
  }
}	

