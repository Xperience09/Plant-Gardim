import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit{
  username!: string;
  password!: string;
  showRegistrationForm!: boolean;
  showLoginForm!: boolean;

  public registeredUsers1: {username: string, password: string}[] = [];

  //register the username and password
  //this will be availabe to use while logging in
  //uses two-way data binding
  register() {
    this.userService.addUser(this.username, this.password);
   
    this.showRegistrationForm = false;
    this.showLoginForm=true;
    // alert(this.username+"  "+this.password)
  }


  //validate the credentials with registred one
  login() {
    // uses for loop in sercive ts to search the username and password
    const user = this.userService.getUser(this.username);
    if (user && user.password === this.password) {
      this.router.navigate(['/Home']);
    } else {
      alert('Invalid username or password');
    }
  }
  

  constructor(private userService: UserService,private router: Router,private appComponent:AppComponent) {
    // to hide the top of the page when loaded
    this.appComponent.showNavbar = false;

    this.showRegistrationForm = false;
    this.showLoginForm=true;
    //default temporary username and pwd just for reference
    this.registeredUsers1.push({username:"admin",password:"admin"})
  }

  ngOnInit(): void {
  }

//show sign up and hide log in
  showRegistration() {
    this.showRegistrationForm = true;
    this.showLoginForm=false
  }


  // show login and hide sign up
  showLogin() {
    this.showRegistrationForm = false;
    this.showLoginForm=true;
  }

 

}
