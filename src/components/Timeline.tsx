import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineModel } from '../models/timelineModel';

const timelineData: TimelineModel[] = [
  {
    date: '12 февраля 1956 г.',
    description: 'Родился в г. Чаусы, Могилевская обл. в семье служащих',
  },
  {
    date: '1972',
    description: 'Окончил Чаусскую СШ № 1 с золотой медалью',
  },
  {
    date: '1982',
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

const Timeline = () => {
  const timelineElements: any[] = timelineData.map(
    (element: TimelineModel, key: number) => {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={element.date}
          key={key}
        >
          <h3 className="vertical-timeline-element-title">{element.date}</h3>
          <h4 className="vertical-timeline-element-title">{element.title}</h4>
          <p>{element.description}</p>
        </VerticalTimelineElement>
      );
    }
  );

  return <VerticalTimeline>{timelineElements}</VerticalTimeline>;
};

export default Timeline;
