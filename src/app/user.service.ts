import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // array to store username and password registered by the user or mannualy.
  registeredUsers: {username: string, password: string}[] = [];

  

  constructor() {
    //default credentials, just for test
    this.registeredUsers.push({username:"admin",password:"admin"})
   }

   // adds user registered username and password to the array. This will be deleted once the user logs out.
  addUser(username: string, password: string) {
    this.registeredUsers.push({username: username, password: password});
  }

  //uses find keyword to search for the username and returns if found
  getUser(username: string) {
    return this.registeredUsers.find(user => user.username === username);
  }
}
