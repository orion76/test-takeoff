import {IEntity} from '@app-configs/types';
import {URespondentConditionValue} from '@app-configs/pools/types';
import {respondentConditionValueRange} from './respondent-condition-value-range';
import {respondentConditionValueSelect} from './respondent-condition-value-select';
import {ETypes} from '../types';

export interface IEntityPool extends IEntity {
  type: ETypes.POOL;
  respondent: URespondentConditionValue[];
}

export const entities_pool: IEntityPool[] = [
  {
    type: ETypes.POOL,
    id: 'pool--1',
    label: 'Pool 1',
    respondent: [...respondentConditionValueRange, ...respondentConditionValueSelect]
  },
  {
    type: ETypes.POOL,
    id: 'pool--2',
    label: 'Pool 2',
    respondent: []
  },
  {
    type: ETypes.POOL,
    id: 'pool--3',
    label: 'Pool 3',
    respondent: []
  },
];
