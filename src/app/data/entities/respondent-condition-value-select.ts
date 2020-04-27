import {URespondentConditionValue} from '@app-configs/pools/types';

import {getRelationship} from '../utils';
import {ETypes, IConditionTypeSelect} from '../types';
import {entities_respondent_condition_types} from './respondent-condition-type';


export const respondentConditionValueSelect: URespondentConditionValue[] = [

  {
    type: ETypes.RESPONDENT_CONDITION_VALUE_SELECT,
    id: ETypes.RESPONDENT_CONDITION_VALUE_SELECT + '--2',
    label: 'respondent-select 2',
    condition_type: getRelationship<IConditionTypeSelect>('loyalty_card_type', entities_respondent_condition_types as IConditionTypeSelect[]),
    values: [{value: 'classic'}],
  },
  {
    type: ETypes.RESPONDENT_CONDITION_VALUE_SELECT,
    id: ETypes.RESPONDENT_CONDITION_VALUE_SELECT + '--3',
    label: 'respondent-select 3',
    condition_type: getRelationship<IConditionTypeSelect>('loyalty_card_status', entities_respondent_condition_types as IConditionTypeSelect[]),
    values: [{value: 'active'}],
  },
];
