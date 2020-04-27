import {ModuleWithProviders, NgModule} from '@angular/core';

import {MenuItem} from 'primeng';
import {BREADCRUMB_SERVICE, BreadcrumbService} from './breadcrumb.service';
import {MENU_DATA} from './types';

@NgModule({
  providers: [{provide: BREADCRUMB_SERVICE, useClass: BreadcrumbService}],
})
export class AppMenuModule {
  static forFeature(menu: MenuItem[]): ModuleWithProviders<AppMenuModule> {
    return {
      ngModule: AppMenuModule, providers: [
        {provide: MENU_DATA, useValue: menu, multi: true},
      ]
    };
  }
}
