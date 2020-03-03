import React from "react";
import Event from "./Event";

export default function CountDownSection({
  events,
  deleteTimer,
  handleEditEvent
}) {
  return (
    <>
      <div className="countdown-section container">
        <div className="event__header">
          <h5>Event</h5>
          <h5>Original time</h5>
          <h5>Time left</h5>
        </div>
        <hr />
        {events.map(event => {
          return (
            <Event
              key={event.id}
              event={event}
              deleteTimer={deleteTimer}
              handleEditEvent={handleEditEvent}
            />
          );
        })}
      </div>
    </>
  );
}
