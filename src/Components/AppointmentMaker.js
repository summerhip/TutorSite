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
    const [name, setName] = useState('');

    const handleDateChange = useCallback(
        (e) => {
            setName('');
            setSelectedTimeSlot(null);
            setBookingDate(e.start);
        }
    );

    const makeAppointment = () => {
        if (bookingDate && selectedTimeSlot) {
            setName(prompt(`Selected slot: ${bookingDate.toDateString()} at ${selectedTimeSlot} Enter your name:`));
        }
        else {
            window.alert('you must select a day and time.');
        }
    };

    

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
                <h2>Select a time:</h2>
                {times.map(time => {
                return (
                    <div>
                        <button key={time} onClick={e => setSelectedTimeSlot(time)}>
                            {time}
                        </button>
                    </div>
                );
            })}
          </div>

            <div id='apptInfo'>
                {bookingDate  ? (
                            <div>
                                Selected date: {bookingDate.toDateString()}
                            </div>
                        ) : null }

                {selectedTimeSlot  ? (
                            <div>
                                Selected time: {selectedTimeSlot}
                            </div>
                        ) : null }

                    <button onClick={makeAppointment}>Select this slot!</button>
            </div>

        </div>
    );
}