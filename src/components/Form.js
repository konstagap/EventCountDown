import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Form({
  setStartDate,
  startDate,
  eventName,
  setEventName,
  handleSubmit
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>ENTER YOUR EVENTS</h2>
        <input className="form__input" type="submit" />
        <input
          className="form__input"
          type="text"
          name="event"
          value={eventName}
          onChange={e => {
            setEventName(e.target.value);
          }}
          placeholder="enter event name"
          required
        />
        <DatePicker
          className="form__input"
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={1}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          required
        />
      </form>
    </>
  );
}
