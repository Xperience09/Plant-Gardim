import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlantsGardim';

  public logoWhite: any;
  public logoBlack:any;
  public showNavbar: boolean =true
  


  constructor(private sanitizer: DomSanitizer,private router: Router) {
    //img src in ng
    this.logoBlack = this.sanitizer.bypassSecurityTrustUrl('assets/logoBlack.png');
    this.logoWhite = this.sanitizer.bypassSecurityTrustUrl('assets/logoWhite.png'); 
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
