import { Component} from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service'; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ UserService ]
})
export class AdminComponent {

  constructor( private userService:UserService) { }

  submitForm(firstName: string, lastName: string, email: string, amount: number) {
    var newUser: User = new User(firstName, lastName, email, amount);
    this.userService.addUser(newUser);
    console.log(newUser);
  }
}
