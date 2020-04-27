import {ETypes, UConditionType} from '../types';

export const entities_respondent_condition_types: UConditionType[] = [
  {
    id: 'respondent_age',
    type: ETypes.RESPONDENT_CONDITION_TYPE,
    label: 'Возраст респондента',
    value_name: 'Диапазон',
    widget: 'range',
  },
  {
    id: 'loyalty_card_type',
    type: ETypes.RESPONDENT_CONDITION_TYPE,
    label: 'Тип карты лояльности',
    value_name: 'Тип',
    widget: 'select',
    options: [
      {value: 'classic', label: 'Classic'},
      {value: 'silver', label: 'Silver'},
      {value: 'gold', label: 'Gold'},
      {value: 'platinum', label: 'Platinum'},
    ]
  },
  {
    id: 'loyalty_card_status',
    type: ETypes.RESPONDENT_CONDITION_TYPE,
    label: 'Статус карты лояльности',
    value_name: 'Статус',
    widget: 'select',

    options: [
      {value: 'active', label: 'Активна'},
      {value: 'inactive', label: 'Не активна'},
      {value: 'missing', label: 'Отсутствует'},
    ]
  },
];
