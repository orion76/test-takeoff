import {Component, OnInit, NgModule, Inject} from '@angular/core';
import {ButtonModule, TableModule} from 'primeng';
import {DATA_SERVICE} from '../../../services/data/data.service';
import {IDataService} from '../../../services/data/types';
import {Observable} from 'rxjs';
import {IEntity} from '@app-configs/types';
import {CommonModule} from '@angular/common';
import {log} from '@app-utils/rxjs/operators';
import {Router} from '@angular/router';
import {BREADCRUMB_SERVICE} from '../../../services/menu/breadcrumb.service';
import {IBreadcrumbService} from '../../../services/menu/types';

@Component({
  selector: 'pool-list',
  template: `
    TABLE
    <p-table [value]="entities$|async">
      <ng-template pTemplate="header">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-entity>
        <tr>
          <td>{{entity.id}}</td>
          <td>{{entity.label}}</td>
          <td>
            <button (click)="Edit(entity)" pButton icon="pi pi-pencil" class="ui-button-info" title="Изменить"></button>
          </td>
        </tr>
      </ng-template>

    </p-table>
  `
})
export class PoolListComponent implements OnInit {

  entities$: Observable<IEntity[]>;

  constructor(@Inject(DATA_SERVICE) private data: IDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.entities$ = this.data.list('pool').pipe();
    // this.menuService.registerBreadcrumb({
    //   routerLink: `/pools/edit`,
    //   label: 'Редактирование'
    // });
  }

  Edit(entity: IEntity) {
    // this.menuService.registerBreadcrumb({
    //   routerLink: `/pools/edit/${entity.id}`,
    //   label: entity.label
    // });
    this.router.navigate(['pools', 'edit', entity.id]);
  }
}


@NgModule({
  imports: [
    TableModule,
    CommonModule,
    ButtonModule
  ],
  exports: [PoolListComponent],
  declarations: [PoolListComponent],
  providers: [],
})
export class PoolListModule {
}
