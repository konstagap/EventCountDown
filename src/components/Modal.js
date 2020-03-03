import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";

export default function Modal({ setEditEvent, editEvent, setEvents }) {
  const [event, setEvent] = useState(editEvent.name);
  const [startDate, setStartDate] = useState(new Date(editEvent.date));

  const handleSubmit = e => {
    e.preventDefault();
    if (new Date(startDate).getTime() < new Date().getTime()) {
      return toast("Event is in the past");
    }
    setEvents(events => {
      let index = events.indexOf(editEvent);
      events[index].name = event;
      events[index].date = startDate.toLocaleString();
      return [...events];
    });
    setEditEvent(null);
  };

  return (
    <div
      id="close"
      className="modal"
      onClick={e => {
        if (e.target.id === "close") {
          setEditEvent(null);
        }
      }}
    >
      <div className="modal__inner">
        <form onSubmit={handleSubmit}>
          <h1>Editting event</h1>
          <input
            className="form__input"
            type="text"
            value={event}
            onChange={e => {
              setEvent(e.target.value);
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
          <input className="form__input" type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
}
