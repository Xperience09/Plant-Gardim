import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-plants-care',
  templateUrl: './plants-care.component.html',
  styleUrls: ['./plants-care.component.css']
  
})
export class PlantsCareComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

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
