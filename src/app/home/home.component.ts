import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private appComponent: AppComponent,private router: Router) {
    //show navbar once logged in
    this.appComponent.showNavbar = true;
  }




// to show the top of the page when loaded
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
