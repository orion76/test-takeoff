import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'parameter-item-number',
  template: `
    <div [formGroup]="parentForm" class="condition-values">
      <div class="form-item condition-values__label">{{label}}</div>
      <form-item label="From" class="condition-values__field">
        <input type="text" pInputText formControlName="from" size="8"/>
      </form-item>
      <form-item label="To" class="condition-values__field">
        <input type="text" pInputText formControlName="to" size="8"/>
      </form-item>
      <ng-content></ng-content>
    </div>
  `
})

export class ParameterItemNumberComponent {

  @Input() parentForm: FormGroup;
  @Input() label: string;

}

