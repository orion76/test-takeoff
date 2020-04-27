import {NgModule} from '@angular/core';
import {PoolsComponent} from './pools.component';

import {PoolsRoutingModule} from './pools-routing.module';
import {PoolFormModule} from './form/pool-form.module';
import {PoolListModule} from './list/pool-list.component';

import {MenubarModule, MenuModule} from 'primeng';

@NgModule({
  imports: [
    PoolsRoutingModule,
    PoolListModule,
    PoolFormModule,
    MenuModule,
    MenubarModule,
  ],
  exports: [PoolsComponent],
  declarations: [PoolsComponent],
  providers: [],
})
export class PoolsModule {
}
