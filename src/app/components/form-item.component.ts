import {
  Component,
  OnInit,
  NgModule,
  Input,
  HostBinding,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';

let lastId = 0;

@Component({
  selector: 'form-item',
  template: `
    <label [attr.for]="id" class="form-item__label">{{label}} </label>
    <div [attr.id]="id" class="form-item__input">
      <ng-content></ng-content>
    </div>
  `,
})

export class FormItemComponent implements OnInit, OnChanges {
  @Input() label: string;
  @Input() required: boolean;
  @HostBinding('class.form-item') itemClass = true;
  @HostBinding('class.form-item-required') requiredClass: boolean;
  id: string;

  constructor(private cdr: ChangeDetectorRef) {
  }


  ngOnInit() {
    this.id = `form-item-${lastId++}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.requiredClass === undefined) {
      this.requiredClass = this.required
    }

  }
}


@NgModule({
  imports: [],
  exports: [FormItemComponent],
  declarations: [FormItemComponent],
  providers: [],
})
export class FormItemModule {
}
