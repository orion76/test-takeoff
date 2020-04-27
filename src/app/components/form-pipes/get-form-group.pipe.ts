import {Pipe, PipeTransform} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Pipe({
  name: 'getFormGroup'
})

export class GetFormGroupPipe implements PipeTransform {
  transform(form: AbstractControl, ...path: any[]): FormGroup {
    return path.reduce((acc, part) => acc.get(part), form);
  }
}
