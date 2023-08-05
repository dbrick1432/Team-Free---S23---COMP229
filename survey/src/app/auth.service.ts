import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public isAuth() {
    return this.getLoginStatus().pipe(
      map(data => data))
  }

  getLoginStatus(){
    return this.http.get('http://localhost:3000/users/status');
  }
}
