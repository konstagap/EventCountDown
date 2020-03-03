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
    name: "New Year 2021",
    date: "1/1/2021, 1:23:31 PM",
    timeover: false
  },
  {
    id: 3,
    name: "Champions League Final",
    date: "5/30/2020, 9:00:31 PM",
    timeover: false
  },
  {
    id: 2,
    name: "Trip to Key West",
    date: "9/2/2020, 1:23:31 PM",
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
