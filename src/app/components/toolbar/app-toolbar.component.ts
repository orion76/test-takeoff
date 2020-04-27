import {Component, OnInit, NgModule} from '@angular/core';
import {InputTextModule, ToolbarModule} from 'primeng';
import {AppLogoComponent} from '@app-components/toolbar/app-logo.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  template: `
    <div class="columns-container">
      <div class="columns-container__column columns-container__column-first app-toolbar__logo">
        <app-logo></app-logo>
      </div>
      <div class="columns-container__column columns-container__column-second app-toolbar__panel">
        <div class="search-by-site">
          <input type="text" pInputText placeholder="Поиск по системе" size="40">
          <span class="search-by-site__icon"><i class="pi pi-search" style="line-height: 1.25;"></i></span>
        </div>
        <div class="logged-user">
          <div class="logged-user__avatar">
            <img src="/assets/avatar.png" class="logged-user__avatar">
          </div>
          <div class="user-info">
            <div class="user-info__name">Сидоров И.</div>
            <div class="user-info__post">Бухгалтер</div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AppToolbarComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}


@NgModule({
  imports: [
    ToolbarModule,
    InputTextModule,
    RouterModule
  ],
  exports: [AppToolbarComponent],
  declarations: [AppToolbarComponent, AppLogoComponent],
  providers: [],
})
export class AppToolbarModule {
}
