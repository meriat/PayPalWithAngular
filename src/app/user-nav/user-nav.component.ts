import { Component} from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
  providers: [AuthenticationService]
})
export class UserNavComponent {
  user;
  public isLoggedIn: Boolean;
  public userName: String;

  constructor(public authService: AuthenticationService) { 
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    }); 
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
