import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SelectItem} from 'primeng';

@Component({
  selector: 'parameter-item-select',
  template: `
    <div [formGroup]="parentForm" class="condition-values">
      <form-item [label]="label">
        <p-dropdown placeholder="- Выберите -"
                    autoDisplayFirst="false"
                    [options]="options" formControlName="value"></p-dropdown>
      </form-item>
      <ng-content></ng-content>
    </div>
  `
})

export class ParameterItemSelectComponent {
  @Input() parentForm: FormGroup;
  @Input() label: string;
  @Input() options: SelectItem[];

}

