import {AbstractControl, FormGroup} from '@angular/forms';



export function formGetEmbed<T extends AbstractControl>(form:FormGroup, ...path:string[]):T{
  return path.reduce((acc, part) => acc.get(part), form) as T;
}

