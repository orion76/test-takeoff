import {Component, Inject, Input, NgModule, OnInit} from '@angular/core';
import {BREADCRUMB_SERVICE} from '../services/menu/breadcrumb.service';
import {IBreadcrumbService} from '../services/menu/types';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'page-mock',
  template: `
    <div class="page-mock">
      <div class="page-mock__message">Здесь могла бы быть страница</div>
      <div class="page-mock__title">{{pageTitle}}</div>
    </div>
  `
})

export class PageMockComponent implements OnInit {
  @Input() label: string;
  pageTitle: string;

  constructor(@Inject(BREADCRUMB_SERVICE) private menuService: IBreadcrumbService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.label) {
      this.pageTitle = this.label;
    } else {
      this.pageTitle = this.menuService.getMenuTitle(this.route.snapshot['_routerState'].url);
    }
  }
}


@NgModule({
  imports: [],
  exports: [PageMockComponent],
  declarations: [PageMockComponent],
  providers: [],
})
export class PageMockModule {
}
