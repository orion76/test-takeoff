import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';
import {poolsMenuData} from './menu';

@Component({
  selector: 'page-pools',
  template: `
    <p-menubar styleClass="menu-bar" [model]="tabs_menu" class="pools-menu-actions"></p-menubar>
    <router-outlet></router-outlet>
  `
})

export class PoolsComponent implements OnInit {
  public tabs_menu: MenuItem[] = poolsMenuData;


  constructor() {
  }

  ngOnInit() {

  }
}


