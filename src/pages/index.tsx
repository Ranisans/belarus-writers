import React from 'react';

import Layout from '../components/Layout';
import { TimelineModel } from '../models/timelineModel';
import Timeline from "../components/Timeline/Timeline";

const timelineData: TimelineModel[] = [
  {
    date: '12 февраля 1956 г.',
    description: 'Родился в г. Чаусы, Могилевская обл. в семье служащих',
  },
  {
    date: '1972',
    title: 'Школа',
    description: 'Окончил Чаусскую СШ № 1 с золотой медалью',
  },
  {
    date: '1982',
    title: 'Армия',
    description:
      'Окончил Литературный институт (семинар В. И. Амлинского).' +
      'Получил специальность по диплому «литературный работник»',
  },
  {
    date: '1972 - 1976',
    description:
      'Переехав в Минск, работал на авторемонтном заводе слесарем и ' +
      'учился на вечернем отделении политехнического института (не завершив учёбу)',
  },
  {
    date: '1973 - 1975',
    description: 'Призван на срочную службу в пограничные войска',
  },
];

const Index = () => (
  <Layout>
    <div>Hello</div>
    <Timeline timelineData={timelineData} />
  </Layout>
);

export default Index;
