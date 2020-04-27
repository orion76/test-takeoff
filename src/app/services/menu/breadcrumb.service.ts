import {Inject, Injectable, InjectionToken} from '@angular/core';
import {IBreadcrumbService, MENU_DATA} from './types';
import {MenuItem} from 'primeng';
import {BehaviorSubject, Observable} from 'rxjs';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter, map, tap} from 'rxjs/operators';

export const BREADCRUMB_SERVICE = new InjectionToken('MENU_SERVICE');


@Injectable({providedIn: 'root'})
export class BreadcrumbService implements IBreadcrumbService {

  private _itemsStatic: Record<string, MenuItem> = {};
  private _itemsDynamic: Record<string, MenuItem> = {};

  private _pageTitleSubj = new BehaviorSubject<string>(null);
  private _pageTitle$ = this._pageTitleSubj.asObservable();


  constructor(@Inject(MENU_DATA) private menuData: MenuItem[][], private router: Router) {
    this.registerMenu(menuData);
  }

  setPageTitle(pageTitle: string) {
    this._pageTitleSubj.next(pageTitle);
  }

  getPageTitle(): Observable<string> {
    return this._pageTitle$;
  }

  getBreadcrumb() {
    return this.router.events
      .pipe(
        tap((event) => event instanceof NavigationStart ? this.setPageTitle(null) : null),
        filter((event) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url),
        map((url) => this.createBreadcrumb(url))
      );
  }

  registerMenu(items: MenuItem[][]) {
    return items.reduce((acc, item) => acc.concat(item), [])
      .forEach((item) => {
        if (this.hasDynamicParameter(item.routerLink)) {
          this._itemsDynamic[item.routerLink] = item
        } else {
          this._itemsStatic[item.routerLink] = item
        }
      });
  }

  hasDynamicParameter(routerLink: string): boolean {
    const reg = /\/:[^\/]+/;
    return reg.test(routerLink);
  }

  getMenuTitle(routerLink: string): string {
    return this._itemsStatic[routerLink].label;
  }

  createBreadcrumb(routerLink: string): MenuItem[] {
    const breadcrumb: MenuItem[] = [];
    breadcrumb.push(this._itemsStatic['/']);
    const parts = routerLink.split('/')
      .filter((part) => !!part);

    let path = '';

    parts.every((part) => {
      path = path + '/' + part;
      return this._itemsStatic[path] ? breadcrumb.push(this._itemsStatic[path]) : false;
    });
    return breadcrumb;
  }
}
