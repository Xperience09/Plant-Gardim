import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlantsGardim';

  public logoWhite: any;
  public logoBlack:any;

  constructor(private sanitizer: DomSanitizer) {
    this.logoBlack = this.sanitizer.bypassSecurityTrustUrl('assets/logoBlack.png');
    this.logoWhite = this.sanitizer.bypassSecurityTrustUrl('assets/logoWhite.png');
  }
}
