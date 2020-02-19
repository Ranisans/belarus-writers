import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement, VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss';
import { TimelineModel } from '../../models/timelineModel';

interface Props {
  timelineData: TimelineModel[];
}

const Timeline = ({ timelineData }: Props) => {
  const timelineElements: JSX.Element[] = timelineData.map(
    (element: TimelineModel, key: number) => {
      return (
        <VerticalTimelineElement
          date={element.date}
          key={key}
        >
          <h3 className="vertical-timeline-element-title">{element.date}</h3>
          {element.title && element.title.length ? (
            <h4 className="vertical-timeline-element-subtitle">
              {element.title}
            </h4>
          ) : null}
          <p>{element.description}</p>
        </VerticalTimelineElement>
      );
    }
  );

  return <VerticalTimeline>{timelineElements}</VerticalTimeline>;
};

export default Timeline;
