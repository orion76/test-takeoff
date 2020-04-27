import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IEntityPool} from '../../../../data/entities';

@Component({
  selector: 'form-parameters',
  template: `
    <div [formGroup]="parentForm">
      <form-item label="Наименование" [required]="controlLabel.invalid && controlLabel.pristine">
        <input pInputText formControlName="label">
      </form-item>
    </div>
  `
})

export class FormParametersComponent implements OnInit {
  @Input() parentEntity: IEntityPool;
  @Input() parentForm: FormGroup;

  controlLabel: FormControl;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.controlLabel = this.fb.control(this.parentEntity.label, [Validators.required]);
    this.parentForm.addControl('label', this.controlLabel);
  }
}
