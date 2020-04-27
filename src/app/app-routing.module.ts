import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PoolsModule} from './pages/pools/pools.module';
import {PageMockComponent} from './pages/page-mock.component';


export const routes: Routes = [
  {path: '', component: PageMockComponent},
  {path: 'pools', loadChildren: () => import('./pages/pools/pools.module').then(m => PoolsModule)},
  {path: 'users', component: PageMockComponent},
  {path: 'black-lists', component: PageMockComponent},
  {path: 'call-center', component: PageMockComponent},
  {path: '**', component: PageMockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
