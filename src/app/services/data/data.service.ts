import {Inject, Injectable, InjectionToken} from '@angular/core';
import {IDataService} from './types';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app-store.module';
import {EntityAction} from '../../store/entities/actions';
import {EntitySelect} from '../../store/entities/selector';
import {IEntity} from '@app-configs/types';

export const DATA_SERVICE = new InjectionToken<IDataService>('DATA_SERVICE');
export const ENTITIES_DATA = new InjectionToken<IEntity[][]>('ENTITIES_DATA');

@Injectable(
  {providedIn: 'root'}
)
export class DataService implements IDataService {
  lastId = 999999;

  constructor(
    @Inject(ENTITIES_DATA) private  entities: IEntity[][],
    private store: Store<AppState>
  ) {
    this.store.dispatch(new EntityAction.AddMany(
      entities.reduce((acc, items) => acc.concat(items), [])
    ));
  }

  getId(type: string) {
    return `${type}--${++this.lastId}`;
  }


  add<T extends IEntity>(entity: T): Observable<T> {
    entity.id = this.getId(entity.type);
    this.store.dispatch(new EntityAction.AddOne(entity));
    return this.store.pipe(select(EntitySelect.Entity, entity)) as Observable<T>;
  }

  delete(entity: IEntity) {
    this.store.dispatch(new EntityAction.DeleteOne(entity));
  }

  update(entity: IEntity) {
    this.store.dispatch(new EntityAction.UpdateOne(entity));
  }

  one<T extends IEntity>(type: string, id: string): Observable<T> {
    return this.store.pipe(select(EntitySelect.Entity, {type, id})) as Observable<T>;
  }

  list<T extends IEntity>(type: string): Observable<T[]> {
    return this.store.pipe(select(EntitySelect.EntityType, {type})) as Observable<T[]>;
  }


}
