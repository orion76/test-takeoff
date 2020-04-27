import {tap} from 'rxjs/operators';

export function log<T>(...message: any[]) {
  const prefix=['%c[rxjs]','color: #060; background: #000'];
  return tap<T>((values:any)=> console.log(...prefix,...message,values));
}
