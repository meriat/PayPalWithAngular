import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
users: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) { 
    this.users = this.database.list('users');
   }

   addUser(newUser: User){
     this.users.push(newUser);
   }

}
