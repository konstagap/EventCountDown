import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Event({ event, deleteTimer, handleEditEvent }) {
  const [timeLeft, setTimeLeft] = useState();

  let cleanCount = useRef();

  useEffect(() => {
    cleanCount.current = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
    return () => {
      clearInterval(cleanCount.current);
    };
  });

  const calculateTimeLeft = () => {
    const eventTime = new Date(event.date).getTime();
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = eventTime - now;
    // Time calculations for days, hours, minutes and seconds
    let timeLeft = {};
    if (distance >= 0) {
      timeLeft.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      timeLeft.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      timeLeft.minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      timeLeft.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft(timeLeft);
    } else {
      clearInterval(cleanCount.current);
    }
  };

  return (
    <>
      {timeLeft && (
        <>
          <div className="event">
            <div className="event__iconbox">
              <FontAwesomeIcon
                icon={faPen}
                className="event__icon icon"
                onClick={() => handleEditEvent(event)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="event__icon icon"
                onClick={() => deleteTimer(event.id)}
              />
            </div>
            <p className="event__item">{event.name}</p>
            <p className="event__item">{event.date}</p>
            <p className="event__item">
              <span className="timeLeft"> {timeLeft.days} days</span>
              {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
            </p>
          </div>
        </>
      )}
    </>
  );
}
