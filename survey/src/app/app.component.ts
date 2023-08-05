import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'survey';
  isAuth : any;

  constructor (public appService:AppService){}

  ngOnInit(){
    this.appService.getLoginStatus().subscribe({
      next: res => this.isAuth = res,
      error: e => console.log("error")
    })
  }
}
