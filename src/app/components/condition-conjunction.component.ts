import {Component, HostBinding, Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'condition-conjunction',
  template: `
    <div [ngClass]="createChildClass('label')">{{label}}</div>
    <div [ngClass]="createChildClass('line')"></div>
  `
})
export class ConditionConjunctionComponent {

  @Input() label: string;
  @Input() modifier: string;

  constructor() {
  }

  @HostBinding('class') get host_class() {
    const classes = ['condition-conjunction'];
    if (this.modifier) {
      classes.push('condition-conjunction-' + this.modifier)
    }
    return classes;
  };

  createChildClass(suffix: string) {
    return this.host_class.map((host_class) => `${host_class}__${suffix}`);
  }
}


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ConditionConjunctionComponent],
  declarations: [ConditionConjunctionComponent],
  providers: [],
})
export class ConditionConjunctionModule {
}
