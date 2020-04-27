import {
  ETypes,
  ICondition,
  IConditionTypeRange,
  IConditionTypeSelect,
  IConditionValueRange,
  IConditionValueSelect
} from '../../data/types';


export interface IRespondentConditionValueRange extends ICondition {
  type: ETypes.RESPONDENT_CONDITION_VALUE_RANGE;
  condition_type?:IConditionTypeRange;
  values?: IConditionValueRange[];
}

export interface IRespondentConditionValueSelect extends ICondition {
  type: ETypes.RESPONDENT_CONDITION_VALUE_SELECT;
  condition_type?:IConditionTypeSelect;
  values?: IConditionValueSelect[];
}

export type URespondentConditionValue = IRespondentConditionValueRange | IRespondentConditionValueSelect;
