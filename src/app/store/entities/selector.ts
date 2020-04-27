import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter} from './reducer';
import {Dictionary, EntityState} from '@ngrx/entity';

import {IEntity} from '@app-configs/types';
import {AppState} from '../../app-store.module';


export namespace EntitySelect {
  const {selectEntities} = adapter.getSelectors();

  export const State = createFeatureSelector<EntityState<IEntity>>('entities');

  export const Entities = createSelector(State, selectEntities);

  const selectEntityType = (entities: Dictionary<IEntity>, props: { type: string }) => {
    return Object.values(entities).filter((entity) => entity.type === props.type)
  }

  export const EntityType = createSelector<AppState, { type: string }, Dictionary<IEntity>, IEntity[]>(
    Entities,
    selectEntityType
  );

  export const Entity = createSelector<AppState, { id: string, type: string }, Dictionary<IEntity>, IEntity>(
    Entities,
    (items, props: { id: string }) => JSON.parse(JSON.stringify(items[props.id]))
  );
}
