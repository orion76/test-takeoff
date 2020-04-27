import {AfterViewInit, ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {distinctUntilChanged, tap} from 'rxjs/operators';
import {UWidgetType} from '../../types';
import {ICondition, UConditionType} from '../../../../data/types';
import {formGetEmbed} from '@app-utils/reactive-form';

function conditionTypesIsEqual(entity1: UConditionType, entity2: UConditionType): boolean {
  return (!!entity1 && !!entity2) && entity1.id === entity2.id;
}

@Component({
  selector: 'respondent-item',
  template: `
    <div [formGroup]="parentForm">
      <form-item label="Условие" class="respondent-item__condition">
        <p-dropdown [options]="conditionTypes"
                    formControlName="condition_type"
                    dataKey="id"
                    optionLabel="label"
                    placeholder="- Тип условия -"
                    autoDisplayFirst="false"
        ></p-dropdown>
        <ng-content select="[itemHeader]" ></ng-content>
      </form-item>
      <p-fieldset *ngIf="conditionTypeValue$|async as conditionTypeValue" legend="Значения"
                  class="form-item respondent-item__values">
        <div class="respondent-item__values" formArrayName="values">
          <div *ngFor="let item of formArrayValues.controls; let i=index" [formArrayName]="i"
               class="respondent-item__value">

            <!--CONJUNCTION -->
            <condition-conjunction *ngIf="i>0;else first" modifier="or" label="ИЛИ"></condition-conjunction>
            <ng-template #first>
              <div class="condition-conjunction-or"></div>
            </ng-template>

            <!--WIDGET VARIANT-->
            <ng-container [ngSwitch]="conditionTypeValue.widget">
              <!--RANGE-->
              <parameter-item-number *ngSwitchCase="'range'"
                                     [label]="conditionTypeValue.value_name"
                                     [parentForm]="item">
                <button (click)="deleteValue(i)" pButton class="ui-button-danger" icon="pi pi-times-circle"></button>
              </parameter-item-number>

              <!-- SELECT  -->
              <parameter-item-select *ngSwitchCase="'select'"
                                     [label]="conditionTypeValue.value_name"
                                     [parentForm]="item"
                                     [options]="conditionTypeValue.options">
                <button (click)="deleteValue(i)" pButton class="ui-button-danger" icon="pi pi-times-circle"></button>
              </parameter-item-select>
              <!-- DEFAULT -->
              <ng-template *ngSwitchDefault>
                Чтобы добавить значения, выберите условие.
              </ng-template>
            </ng-container>
          </div>
          <p-button (onClick)="addValue(conditionTypeValue.widget)" label="Добавить"></p-button>
        </div>
      </p-fieldset>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RespondentItemComponent implements OnInit, AfterViewInit {

  @Input() conditionTypes: UConditionType[];
  @Input() parentForm: FormGroup;
  @Input() value: ICondition;
  conditionTypeValue$: Observable<UConditionType>;
  conditionTypeControl: FormControl;

  formArrayValues: FormArray;


  constructor(private fb: FormBuilder) {
  }

  @HostBinding('class') get host_class() {
    return ['respondent-item']
  } ;

  ngOnInit() {
    this.formArrayValues = formGetEmbed<FormArray>(this.parentForm, 'values');
    this.conditionTypeControl = this.parentForm.get('condition_type') as FormControl;
    this.conditionTypeValue$ = this.conditionTypeControl.valueChanges.pipe(
      distinctUntilChanged(conditionTypesIsEqual),
      tap((condition) => this.initValues(condition))
    );
    this.addConditionValuesArray(this.value);
  }

  addConditionValuesArray(condition: ICondition) {

    const {condition_type, values} = condition;
    values.forEach((value) => {
      this.formArrayValues.push(this.newItemGroup(condition_type.widget));
    })
  }

  initValues(conditionValue: UConditionType) {
    if (this.conditionTypeControl.dirty) {
      this.formArrayValues.clear();
      this.formArrayValues.push(this.newItemGroup(conditionValue.widget));
    }
  }

  newItemGroup(widget: UWidgetType): FormGroup {
    let value: FormGroup;
    switch (widget) {
      case 'select':
        value = this.fb.group({value: null});
        break;
      case 'range':
        value = this.fb.group({from: null, to: null});
        break;
    }
    return value;
  }

  addValue(widget: UWidgetType) {
    this.formArrayValues.push(this.newItemGroup(widget));
  }

  deleteValue(index: number) {
    this.formArrayValues.removeAt(index);
  }

  debug(...vars: any[]) {
    console.log('[debug] RespondentItem', ...vars);
  }

  ngAfterViewInit(): void {
    this.parentForm.patchValue(this.value);
  }
}
