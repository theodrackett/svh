import React, {useEffect, useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Event from "./Event";
import EventDetail from "./EventDetail ";
import TopBar from "./TopBar";
import { svh_backend } from "../../../declarations/svh_backend";

function Home() {

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    console.log("Effect triggered");
    fetchData();
  }, [])

  async function fetchData() {
    const eventsList = await svh_backend.readEvents();
    setEvents(eventsList);
  }
  
  const handleEventDetailsClick = (event) => {
    setSelectedEvent(event);
  };

  let content = <>{events.map(event => (
    <Event event={event} onClick={handleEventDetailsClick} />
    ))}</>

  let topBar = <TopBar />
  if (selectedEvent) {
    content = <EventDetail event={selectedEvent} />;
    topBar = <></>;
  }
    
  return (
      <div className="container">
        <Header />
        {topBar}
        <section className="event-listings">
          {content}
        </section>
        <Footer />
      </div>
  )
}

export default Home;