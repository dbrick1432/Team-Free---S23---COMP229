import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'survey';
  isAuth : any;

  constructor (public authService:AuthService){}

  ngOnInit(){
    this.authService.getLoginStatus().subscribe({
      next: res => this.isAuth = res,
      error: e => console.log("error")
    })
  }
}
