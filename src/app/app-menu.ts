import {MenuItem} from 'primeng';


export const homeMenuData: MenuItem[] = [
  {id: 'home', routerLink: '/', label: 'Главная',icon:'pi pi-home'},
];

export const rootMenuData: MenuItem[] = [
  {id: 'pools', routerLink: '/pools', label: 'Опросы',icon:'pi pi-file'},
  {id: 'users', routerLink: '/users', label: 'Пользователи',icon:'pi pi-users'},
  {id: 'black-lists', routerLink: '/black-lists', label: 'Черные списки',icon:'pi pi-ban'},
  {id: 'call-center', routerLink: '/call-center', label: 'Колл-центер',icon:'pi pi-volume-up'},
];
