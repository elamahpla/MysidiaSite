import React from 'react';

const Calendar = () => (
  <div className="CalendarContainer">
    <div className="Calendar">
      <iframe src="https://calendar.google.com/calendar/embed?src=mysidiamail%40gmail.com&ctz=America%2FDenver" style={{border: 'none', width: '800px', height: '600px', frameborder: '0', scrolling: 'no'}}></iframe>
    </div>
  </div>
);

export default Calendar;