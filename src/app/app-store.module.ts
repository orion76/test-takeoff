import {EntityState} from '@ngrx/entity';
import {IEntity} from '@app-configs/types';
import {NgModule} from '@angular/core';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {reducerEntities} from './store/entities/reducer';


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    state = reducer(state, action);
    let prefix = ['[action]'];
    if (action.type.startsWith('[ENTITIES]')) {
      prefix = ['%c[action]', 'background: #f00 ;color: #fada55'];
    }

    console.log(...prefix, action.type, {action, state});
    return state;
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

export interface AppState {
  entities: EntityState<IEntity>;
}

@NgModule({
  imports: [

    StoreModule.forRoot({
        entities: reducerEntities,
      },
      {
        metaReducers,
        runtimeChecks: {
        }
      }
    ),
  ],
  exports: [],
  providers: [],
})
export class AppStoreModule {
}
