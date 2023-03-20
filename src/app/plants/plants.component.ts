import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit{
  public imageSource: any;

  constructor(private sanitizer: DomSanitizer,private router:Router) {
    this.imageSource = this.sanitizer.bypassSecurityTrustUrl('assets/voucher.png');
  }
  
  ngOnInit() {
    this.router.events.subscribe(event => {
      // to show the top of the page when loaded
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  
}
