import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BreadcrumbModule, MenuModule, ToolbarModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataModule} from './services/data/data.module';
import {AppStoreModule} from './app-store.module';
import {entities_pool} from './data/entities';
import {entities_respondent_condition_types} from './data/entities/respondent-condition-type';
import {AppMenuModule} from './services/menu/app-menu.module';
import {homeMenuData, rootMenuData} from './app-menu';
import {poolItemMenuData, poolsMenuData} from './pages/pools/menu';
import {AppToolbarModule} from '@app-components/toolbar/app-toolbar.component';
import {PageMockModule} from './pages/page-mock.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppStoreModule,
    DataModule,
    AppMenuModule,
    AppMenuModule.forFeature(homeMenuData),
    AppMenuModule.forFeature(rootMenuData),
    AppMenuModule.forFeature(poolsMenuData),
    AppMenuModule.forFeature(poolItemMenuData),
    DataModule.forFeature(entities_pool),
    DataModule.forFeature(entities_respondent_condition_types),
    AppRoutingModule,
    // PageMainModule,
    BreadcrumbModule,
    MenuModule,
    ToolbarModule,
    AppToolbarModule,
    PageMockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
