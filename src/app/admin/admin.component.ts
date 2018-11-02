import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(firstName: string, lastName: string, email: string, amount: number) {
    var newUser: User = new User(firstName, lastName, email, amount);
  }
}
