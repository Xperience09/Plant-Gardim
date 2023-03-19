import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent {
  public imageSource: any;

  constructor(private sanitizer: DomSanitizer) {
    this.imageSource = this.sanitizer.bypassSecurityTrustUrl('assets/voucher.png');
  }
}
