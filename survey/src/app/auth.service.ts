import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public getLoginStatus(){
    return this.http.get('http://localhost:3000/users/status');
  }
}
