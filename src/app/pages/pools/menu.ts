import {MenuItem} from 'primeng';

export const   poolsMenuData: MenuItem[] = [
  {id: 'list', routerLink: '/pools/list', label: 'Список'},
  {id: 'add', routerLink: '/pools/add', label: 'Добавить опрос'},
];

export const   poolItemMenuData: MenuItem[] = [
  {id: 'edit', routerLink: '/pools/edit', label: 'Редактирование'},
  {id: 'view', routerLink: '/pools/view', label: 'Просмотр'},
];
