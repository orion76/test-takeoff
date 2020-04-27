import {Component, OnInit, NgModule} from '@angular/core';
import {ToolbarModule} from 'primeng';

@Component({
  selector: 'app-logo',
  template: `
    <div class="app-logo">
      <a routerLink="/">
        <svg width="70" height="70" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svg-logo">
          <circle cx="33" cy="33" r="33" style="fill:#255;"/>
        </svg>
      </a>
    </div>

  `
})

export class AppLogoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}


