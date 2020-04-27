import {NgModule} from '@angular/core';
import {FormParametersComponent} from './parameters.component';
import {RespondentItemComponent} from '../respondents/respondent-item.component';
import {ParameterItemNumberComponent} from '../respondents/items/respondent-item-number';
import {ParameterItemSelectComponent} from '../respondents/items/respondent-item-select';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { InputTextModule} from 'primeng/inputtext';
import {FormItemModule} from '@app-components/form-item.component';
import {CommonModule} from '@angular/common';
import {FieldsetModule} from 'primeng';
import {ConditionConjunctionModule} from '@app-components/condition-conjunction.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    FormItemModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    FieldsetModule,
    ConditionConjunctionModule
  ],
  exports: [
    FormParametersComponent,
    RespondentItemComponent,

  ],
  declarations: [
    FormParametersComponent,
    RespondentItemComponent,
    ParameterItemNumberComponent,
    ParameterItemSelectComponent
  ],
  providers: [],
})
export class ParametersModule {
}
