import {Action} from '@ngrx/store';
import {IEntity} from '@app-configs/types';


export namespace EntityAction {

  export enum EActions {
    ADD_ONE = '[ENTITIES] ADD_ONE',
    DELETE_ONE = '[ENTITIES] DELETE_ONE',
    UPDATE_ONE = '[ENTITIES] UPDATE_ONE',
    ADD_MANY = '[ENTITIES] ADD_MANY',
  }

  export class AddOne implements Action {
    readonly type = EActions.ADD_ONE;

    constructor(public entity: IEntity) {
    }
  }


  export class DeleteOne implements Action {
    readonly type = EActions.DELETE_ONE;

    constructor(public entity: IEntity) {
    }
  }


  export class UpdateOne implements Action {
    readonly type = EActions.UPDATE_ONE;

    constructor(public entity: IEntity) {
    }
  }

  export class AddMany implements Action {
    readonly type = EActions.ADD_MANY;

    constructor(public entities: IEntity[]) {
    }
  }


  export type TActions =
    AddOne
    | AddMany
    | DeleteOne
    | UpdateOne;

}
