import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import {IEntity} from '@app-configs/types';
import {EntityAction} from './actions';
import EActions = EntityAction.EActions;
import TActions = EntityAction.TActions;

export const adapter: EntityAdapter<IEntity> = createEntityAdapter<IEntity>({
  selectId: (entity) => entity.id,
});

export const initialState: EntityState<IEntity> = adapter.getInitialState({
  uid: null,
  entity: null,
  field_name: null
});


export function reducerEntities(state: EntityState<IEntity> = initialState, action: TActions) {

  switch (action.type) {

    case EActions.ADD_ONE: {
      const {entity} = action;
      state = adapter.addOne(entity, state);
      break;
    }
    case EActions.ADD_MANY: {
      const {entities} = action;
      state = adapter.addMany(entities, state);
      break;
    }
    case EActions.UPDATE_ONE: {
      const {entity} = action;
      state = adapter.updateOne({id: entity.id, changes: entity}, state);
      break;
    }
    case EActions.DELETE_ONE: {
      const {entity} = action;
      state = adapter.removeOne(entity.id, state);
      break;
    }
  }

  return state;
}
