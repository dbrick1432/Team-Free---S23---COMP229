import { Component } from '@angular/core';
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
}
