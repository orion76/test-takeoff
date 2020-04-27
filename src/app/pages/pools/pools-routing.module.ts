import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PoolsComponent} from './pools.component';
import {PoolListComponent} from './list/pool-list.component';
import {PoolFormComponent} from './form/pool-form.component';


export const routesSubPages: Routes = [
  {path: '', redirectTo: 'list'},
  {path: 'list', component: PoolListComponent},
  {path: 'add', component: PoolFormComponent},
  {path: 'edit/:id', component: PoolFormComponent},
  {path: '**', redirectTo: 'list'},
];

export const routes: Routes = [
  {path: '', component: PoolsComponent, children: routesSubPages},
  {path: '**', redirectTo: 'pools', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PoolsRoutingModule {
}
