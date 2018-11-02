import { Component} from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [AuthenticationService]

})
export class NavBarComponent{
  user;

  constructor(public authService: AuthenticationService) { 
    this.authService.user.subscribe(user => {
      console.log(user);
    }); 
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }


}
