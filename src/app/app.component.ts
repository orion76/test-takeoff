import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';
import {BREADCRUMB_SERVICE} from './services/menu/breadcrumb.service';
import {IBreadcrumbService} from './services/menu/types';
import {Observable} from 'rxjs';
import {rootMenuData} from './app-menu';
import {log} from '@app-utils/rxjs/operators';


@Component({
  selector: 'app-root',
  template: `
    <div class="toolbar page-row">
      <app-toolbar class="app-toolbar"></app-toolbar>
    </div>
    <div class="page-row app-page">
      <div class="columns-container">
        <div class="columns-container__column columns-container__column-first">
          <p-menu [model]="menu" class="menu-main"></p-menu>
        </div>
        <div class="columns-container__column columns-container__column-second">
          <!-- Breadcrumb -->
          <p-breadcrumb [model]="breadcrumb$|async"></p-breadcrumb>
          <h2 *ngIf="pageTitle$|async as pageTitle">{{pageTitle}}</h2>
          <!-- Content -->
          <div class="content">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>

    </div>
    <!-- Footer -->
    <div class="page-row">
      <footer class="page-footer">

      </footer>
    </div>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public breadcrumb$: Observable<MenuItem[]>;
  public pageTitle$: Observable<string>;
  public menu = rootMenuData;

  constructor(@Inject(BREADCRUMB_SERVICE) private breadcrumbService: IBreadcrumbService) {
  }

  ngOnInit(): void {
    this.breadcrumb$ = this.breadcrumbService.getBreadcrumb();
    this.pageTitle$ = this.breadcrumbService.getPageTitle();
  }

}
