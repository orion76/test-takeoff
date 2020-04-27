import {NgModule} from '@angular/core';

import {PoolFormComponent} from './pool-form.component';
import {FormRespondentsComponent} from './respondents/respondents.component';
import {PageMockModule} from '../../page-mock.component';

import {CommonModule} from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {FormItemModule} from '@app-components/form-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ParametersModule} from './parameters/parameters.module';
import {ButtonModule, FieldsetModule} from 'primeng';
import {ConditionConjunctionModule} from '@app-components/condition-conjunction.component';
import {FormPipesModule} from '@app-components/form-pipes/form-pipes.module';


@NgModule({
  imports: [
    MenuModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    FormItemModule,
    TabViewModule,
    ReactiveFormsModule,
    ParametersModule,
    FieldsetModule,
    ConditionConjunctionModule,
    FormPipesModule,
    ButtonModule,
    PageMockModule
  ],
  exports: [
    PoolFormComponent,
    FormRespondentsComponent,
  ],
  declarations: [
    PoolFormComponent,
    FormRespondentsComponent,
  ],
  providers: [],
})
export class PoolFormModule {
}
