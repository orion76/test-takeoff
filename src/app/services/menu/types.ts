import {MenuItem} from 'primeng';
import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export const MENU_DATA = new InjectionToken('MENU_DATA');

export interface IBreadcrumbService {
  getBreadcrumb(): Observable<MenuItem[]>;

  getMenuTitle(routerLink: string): string;

  setPageTitle(pageTitle: string);

  getPageTitle(): Observable<string>;
}
