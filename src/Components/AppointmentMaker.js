import { useEffect, useRef, useState, useCallback } from "react";
import './AppointmentMaker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const times = [
  "17:00 - 18:00",
  "18:00 - 19:00",
  "19:00 - 20:00",
  "20:00 - 21:00"
];

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

export function AppointmentMaker(props) {
    const [bookingDate, setBookingDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    const handleDateChange = useCallback(
        (e) => {
            setSelectedTimeSlot(null);
            setBookingDate(e.start);
        }
    );

    return (
        <div id='appointmentMaker'>
            <Calendar 
                className='calendar'
                value={bookingDate}
                onSelectSlot={handleDateChange}
                defaultDate={new Date()}
                view='month'
                localizer={localizer}
                events={dummyEvents}
                selectable={true}
            />
            <div className='timeSlots'>
                {bookingDate  ? (
                    <div>
                    Selected slot: {bookingDate.toDateString()}
                    </div>
                ) : null }

                <h2>Select a time:</h2>
                {times.map(time => {
                return (
                    <div>
                        <button
                            key={time}
                            onClick={e => setSelectedTimeSlot(time)}
                        >
                            {time}
                        </button>
                    </div>
                );
            })}
          </div>
        </div>
    );
}