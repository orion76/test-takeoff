import {Observable} from 'rxjs';
import {IEntity} from '@app-configs/types';


export interface IDataService {

  one<T extends IEntity>(type: string, id: string): Observable<T>;

  list<T extends IEntity>(type: string): Observable<T[]>;

  add<T extends IEntity>(entity: T): Observable<T>;

  update<T extends IEntity>(entity: T);

  delete<T extends IEntity>(entity: T);

}
