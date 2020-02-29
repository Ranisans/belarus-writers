import { WorklogModel } from '../types';

const worklogData: WorklogModel[] = [
  {
    name: 'Ruslan Dudenich',
    worklog: [
      {
        title: 'Разработка структуры приложения',
        hours: 2,
      },
      {
        title: 'Развернуть стартовый проект на Netlify',
        hours: 4,
      },
      {
        title: 'Настройка среды разработки: gatsby, eslint, prettier, hasky',
        hours: 1,
      },
      {
        title: 'Создание шаблона страницы писателя',
        hours: 3,
      },
      {
        title: 'Сбор данных по писателю Адам Мицкевич и Пётр Бровка',
        hours: 2,
      },
      {
        title: 'Создание компонентов Seo, Redirect, страницы 404',
        hours: 2,
      },
    ],
  },
  {
    name: 'Yauheni	Vaniushyn',
    worklog: [
      {
        title: 'Создание Navbar',
        hours: 5,
      },
      {
        title: 'Сбор данных по писателю Василий Быков и Янка Купала',
        hours: 2,
      },
      {
        title: 'Создание компоненты Video',
        hours: 5,
      },
    ],
  },
  {
    name: 'Gregory	Fomenko',
    worklog: [
      {
        title: 'Создание страницы со списком писателей и поиском',
        hours: 5,
      },
      {
        title: 'Сбор данных по писателю Нил Гилевич и Алесь Адамович',
        hours: 2,
      },
      {
        title: 'Создание компонеты Map',
        hours: 4,
      },
    ],
  },
  {
    name: 'Aynur Shauerman',
    worklog: [
      {
        title:
          'Сбор данных по писателям Иван Павлович Мележ и Иван Петрович Шамякин',
        hours: 2,
      },
      {
        title: 'Настройка темы сайта',
        hours: 15,
      },
      {
        title: 'Создание storybook',
        hours: 20,
      },
      {
        title: 'Страница писателя: стилизация и компоновка',
        hours: 10,
      },
      {
        title: 'Gatsby-image',
        hours: 10,
      },
      {
        title: 'Создание компоненты Gallery',
        hours: 10,
      },
    ],
  },
  {
    name: 'Oksana	Fainitskaya',
    worklog: [
      {
        title: 'Создание компоненты Timeline',
        hours: 4.5,
      },
      {
        title: 'Сбор данных по писателю Янка Брыль и Якуб Колас',
        hours: 2,
      },
      {
        title: 'Создание страницы "Журнал работ"',
        hours: 6,
      },
      {
        title: 'Создание страницы "Команда"',
        hours: 4,
      },
    ],
  },
  {
    name: 'Anna Kulai',
    worklog: [
      {
        title: 'Создание компоненты Footer',
        hours: 3,
      },
      {
        title: 'Создатние компоненты Layout',
        hours: 4,
      },
      {
        title: 'Создатние списка писателей (12 человек)',
        hours: 6,
      },
      {
        title: 'Сбор данных по писателю Светлана Алексеич и Иван Мележ',
        hours: 2,
      },
      {
        title: 'Создание главной страницы',
        hours: 2,
      },
    ],
  },
];

export default worklogData;
