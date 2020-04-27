import {ModuleWithProviders, NgModule} from '@angular/core';
import {DATA_SERVICE, DataService, ENTITIES_DATA} from './data.service';
import {IEntity} from '@app-configs/types';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [{provide: DATA_SERVICE, useClass: DataService}],
})
export class DataModule {
  static forFeature(entities: IEntity[]): ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule, providers: [
        {provide: ENTITIES_DATA, useValue: entities, multi: true},
      ]
    };
  }
}
