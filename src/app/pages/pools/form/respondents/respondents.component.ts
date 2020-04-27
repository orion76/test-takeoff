import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {IEntityPool} from '../../../../data/entities';
import {DATA_SERVICE} from '../../../../services/data/data.service';
import {IDataService} from '../../../../services/data/types';
import {Observable} from 'rxjs';
import {ETypes, UConditionType} from '../../../../data/types';


@Component({
  selector: 'form-respondents',
  template: `

    <div class="parameter-items">
      <ng-container *ngFor="let formGroupItem of formArrayRespondent.controls;let i=index">

        <div class="respondent-item-wrapper">
          <condition-conjunction *ngIf="i>0" modifier="and" label="И"></condition-conjunction>
          <respondent-item [parentForm]="formGroupItem|getFormGroup"
                           [value]="parentEntity.respondent[i]"
                           [conditionTypes]="conditionTypes$|async">
            <ng-container itemHeader>
              <button pButton (click)="deleteCondition(i)" label="Удалить условие" class="ui-button ui-button-danger"></button>
            </ng-container>

          </respondent-item>
        </div>
      </ng-container>
    </div>
    <div class="parameter-add form-item">
      <button pButton (click)="addNewCondition()" class="ui-button-secondary">
        <div class="parameter-add__plus">+</div>
        Нажмите, чтобы добавить новое условие выборки.<br>
        Все условия связываются между собой логическим "И"
      </button>
    </div>
  `,
})

export class FormRespondentsComponent implements OnInit {
  @Input() parentEntity: IEntityPool;
  @Input() parentForm: FormGroup;
  formArrayRespondent: FormArray;
  conditionTypes$: Observable<UConditionType[]>;

  constructor(
    @Inject(DATA_SERVICE) private data: IDataService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.conditionTypes$ = this.data.list<UConditionType>('respondent-condition-type');

    this.formArrayRespondent = this.fb.array([]);
    this.parentForm.addControl('respondent', this.formArrayRespondent);
    this.parentEntity.respondent.forEach((condition) => {
      this.formArrayRespondent.push(this.newConditionGroup());
    })
  }

  debug(...vars: any[]) {
    console.log('[debug] FormRespondentsComponent', ...vars);
  }

  newConditionGroup() {
    return this.fb.group({
      condition_type: {},
      values: this.fb.array([])
    })
  }

  deleteCondition(index: number) {
    this.formArrayRespondent.removeAt(index);
  }

  addNewCondition() {
    this.parentEntity.respondent.push({
      id: '',
      type: ETypes.RESPONDENT_CONDITION_VALUE_SELECT,
      condition_type: null,
      values: []
    });
    this.formArrayRespondent.push(this.newConditionGroup());
  }
}

