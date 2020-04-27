import {IEntity} from '@app-configs/types';
import {SelectItem} from 'primeng';
import {UWidgetType} from '../pages/pools/types';

export enum ETypes {
  POOL = 'pool',
  RESPONDENT_CONDITION_TYPE = 'respondent-condition-type',
  RESPONDENT_CONDITION_VALUE_RANGE = 'respondent-condition-value-range',
  RESPONDENT_CONDITION_VALUE_SELECT = 'respondent-condition-value-select',
}

export interface IConditionType extends IEntity {
  type: ETypes.RESPONDENT_CONDITION_TYPE
  widget: UWidgetType;
  value_name: string;
}

export interface IConditionTypeSelect extends IConditionType {
  widget: 'select';
  options: SelectItem[]
}

export interface IConditionTypeRange extends IConditionType {
  widget: 'range';
}

export type UConditionType = IConditionTypeSelect | IConditionTypeRange;

export interface IConditionValueSelect {
  value: string;
}

export interface IConditionValueRange {
  from: number;
  to: number;
}

export type UConditionValue = IConditionValueSelect | IConditionValueRange;

export interface ICondition extends IEntity {
  condition_type?: UConditionType;
  values?: UConditionValue[];
}
