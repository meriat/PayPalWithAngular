import { Component} from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

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

  constructor(public authService: AuthenticationService, private router: Router) { 
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.user = null;
        this.router.navigate(['']);
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
