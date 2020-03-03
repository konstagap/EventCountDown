import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/NavBar.js";
import Form from "./components/Form";
import CountDownSection from "./components/CountDownSection";
import { v4 as uuidv4 } from "uuid";
import Modal from "./components/Modal";

let inputs = [
  {
    id: 1,
    name: "New Year",
    date: "3/2/2023, 1:23:31 PM",
    timeover: false
  },
  {
    id: 3,
    name: "New 2",
    date: "3/2/2024, 1:23:31 PM",
    timeover: false
  },
  {
    id: 2,
    name: "New 3",
    date: "3/2/2025, 1:23:31 PM",
    timeover: false
  }
];

function App() {
  const [events, setEvents] = useState(inputs);
  const [startDate, setStartDate] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [editEvent, setEditEvent] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    if (new Date(startDate).getTime() < new Date().getTime()) {
      return toast("Event is in the past");
    }
    const newEvent = {
      id: uuidv4(),
      name: eventName,
      date: startDate.toLocaleString(),
      timeover: false
    };
    console.log("newEv :", newEvent);
    setEvents([...events, newEvent]);
    setEventName("");
    setStartDate(new Date());
  };
  // delete timer
  const deleteTimer = id => {
    setEvents(events => {
      return events.filter(event => event.id !== id);
    });
  };
  // edit event
  const handleEditEvent = event => {
    setEditEvent(event);
  };

  return (
    <main>
      <ToastContainer />
      <NavBar />
      <section className="form-section container">
        <Form
          handleSubmit={handleSubmit}
          eventName={eventName}
          setEventName={setEventName}
          startDate={startDate}
          setStartDate={setStartDate}
        />
      </section>
      <CountDownSection
        events={events}
        setEvents={setEvents}
        deleteTimer={deleteTimer}
        handleEditEvent={handleEditEvent}
      />
      {editEvent && (
        <Modal
          setEditEvent={setEditEvent}
          editEvent={editEvent}
          events={events}
          setEvents={setEvents}
        />
      )}
    </main>
  );
}

export default App;
