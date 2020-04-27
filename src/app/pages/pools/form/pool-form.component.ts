import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {DATA_SERVICE} from '../../../services/data/data.service';
import {IDataService} from '../../../services/data/types';
import {IEntityPool} from '../../../data/entities';
import {take} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ETypes} from '../../../data/types';
import {BREADCRUMB_SERVICE} from '../../../services/menu/breadcrumb.service';
import {IBreadcrumbService} from '../../../services/menu/types';


export type TFormMode = 'add' | 'edit';

@Component({
  selector: 'pool-form',
  template: `
    <form [formGroup]="form">
      <p-tabView *ngIf="entity$|async as entity" [activeIndex]="index" class="pool-form-tabs">
        <p-tabPanel [header]="tabs[0]">
          <form-parameters [parentForm]="form" class="pool-form-tabs__item pool-form-tabs__item-parameters"
                           [parentEntity]="entity"></form-parameters>
        </p-tabPanel>
        <p-tabPanel [header]="tabs[1]">
          <page-mock [label]="tabs[1]" class="pool-form-tabs__item"></page-mock>
        </p-tabPanel>
        <p-tabPanel [header]="tabs[2]">
          <page-mock [label]="tabs[2]" class="pool-form-tabs__item"></page-mock>
        </p-tabPanel>
        <p-tabPanel [header]="tabs[3]">
          <page-mock [label]="tabs[3]" class="pool-form-tabs__item"></page-mock>
        </p-tabPanel>
        <p-tabPanel [header]="tabs[4]" class="pool-form-tab-panel">
          <form-respondents [parentForm]="form"
                            [parentEntity]="entity" class
                              ="pool-form-tabs__item  pool-form-tabs__item-respondents"></form-respondents>
        </p-tabPanel>
      </p-tabView>
      <div class="form-actions">
        <button *ngIf="visibleButtonPrev()" pButton label="Назад"
                (click)="prevTab()"
                icon="pi pi-arrow-left" iconPos="left"
                class="form-actions__button ui-button-secondary">

        </button>
        <button pButton label="Протестировать опрос"
                class="form-actions__button ui-button-success">

        </button>
        <button pButton label="Сохранить"
                (click)="SubmitForm()"
                [disabled]="form.invalid"
                class="form-actions__button ui-button-default">

        </button>
        <button *ngIf="visibleButtonNext()" pButton label="Далее"
                (click)="nextTab()"
                icon="pi pi-arrow-right" iconPos="right"
                class="form-actions__button ui-button-secondary">
        </button>

      </div>
    </form>
  `,
})
export class PoolFormComponent implements OnInit {
  form: FormGroup;
  tabs = [
    'Параметры',
    'Вопросы',
    'Логика',
    'Условия',
    'Респонденты'
  ];
  index = 0;
  indexMax: number;
  parameters = {
    id: null,
    label: null,
  };
  entity$: Observable<IEntityPool>;

  constructor(
    @Inject(BREADCRUMB_SERVICE) private breadcrumbService: IBreadcrumbService,
    @Inject(DATA_SERVICE) private data: IDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {

    this.indexMax = this.tabs.length - 1;
    this.initForm();

    this.entity$.pipe(take(1)).toPromise().then((entity) => {
      const {id, type, label} = entity;
      this.form.patchValue({id, type});
      this.breadcrumbService.setPageTitle(label);
    })
  }

  initForm() {
    this.form = this.fb.group({id: null, type: null});

    switch (this.getFormMode()) {
      case 'add':
        this.entity$ = of(this.newPool());
        break;
      case 'edit':
        this.entity$ = this.data.one<IEntityPool>('pool', this.activatedRoute.snapshot.params.id);
        break;
    }
  }

  SubmitForm() {
    switch (this.getFormMode()) {
      case 'add':
        this.data.add(this.form.value);
        break;
      case 'edit':
        this.data.update(this.form.value);
        break;
    }
    this.router.navigate(['pools', 'list']);
  }


  nextTab() {
    this.index++;
  }

  prevTab() {
    this.index--;
  }


  visibleButtonNext(): boolean {
    return this.index < this.indexMax;
  }

  visibleButtonPrev(): boolean {
    return this.index > 0;
  }


  newPool(): IEntityPool {
    return {
      id: null,
      type: ETypes.POOL,
      label: null,
      respondent: []
    }
  }

  getFormMode(): TFormMode {
    return this.activatedRoute.snapshot.url[0].path as TFormMode;
  }

}

