import {URespondentConditionValue} from '@app-configs/pools/types';
import {getRelationship} from '../utils';
import {ETypes, IConditionTypeRange} from '../types';
import {entities_respondent_condition_types} from './respondent-condition-type';


export const respondentConditionValueRange: URespondentConditionValue[] = [
  {
    type: ETypes.RESPONDENT_CONDITION_VALUE_RANGE,
    id: 'respondent-condition-value-range--1',
    label: 'respondent-range 1',
    condition_type: getRelationship<IConditionTypeRange>('respondent_age', entities_respondent_condition_types as IConditionTypeRange[]),
    values: [
      {from: 0, to: 10},
      {from: 11, to: 20},
      {from: 21, to: 30},
    ]
  },
];
