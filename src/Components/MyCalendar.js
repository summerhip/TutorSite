import React from 'react';
import './MyCalendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

export function MyCalendar(props) {

  const dummyEvents = [
    {
      allDay: false,
      end: new Date('May 8, 2022 11:13:00'),
      start: new Date('May 07, 2022 11:13:00'),
      title: 'hi',
    },
    {
      allDay: true,
      end: new Date('December 09, 2017 11:13:00'),
      start: new Date('December 09, 2017 11:13:00'),
      title: 'All Day Event',
    },    
  ];

  return (
    <div id='myCalendar'>
      <h1>Select available slots</h1>
      <div className='scheduler'>
          <Calendar
              defaultDate={new Date("2022-05-07T19:56:21.196Z")}
              defaultView="week"
              localizer={localizer}
              events={dummyEvents}
              onSelectEvent={function noRefCheck(){}}
              onSelectSlot={function noRefCheck(){}}
              selectable
              step={15}
              timeslots={4}
          />
      </div>
     </div>
  );
}