import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { faHouseLaptop, faUser, faSignInAlt, faSignOutAlt, faTableList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  faHouseLaptop = faHouseLaptop;
  faUser = faUser;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faTableList = faTableList;

  isAuth :any;

  constructor (public appService:AppService){}

  ngOnInit(){
    this.appService.getLoginStatus().subscribe({
      next: res => this.isAuth = res,
      error: e => console.log("error")
    })
  }
}
