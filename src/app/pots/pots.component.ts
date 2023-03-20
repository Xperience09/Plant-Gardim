import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.css']
})
export class PotsComponent {
  constructor(private router: Router) { }



  ngOnInit() {
    this.router.events.subscribe(event => {
      // to show the top of the page when loaded
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
