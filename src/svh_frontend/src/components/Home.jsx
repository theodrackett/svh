import React, {useEffect, useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Event from "./Event";
import EventDetail from "./EventDetail ";
import TopBar from "./TopBar";
import { svh_backend } from "../../../declarations/svh_backend";
import useGeoLocation from "../hooks/useGeoLocation";

function Home() {

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const location = useGeoLocation();

  useEffect(() => {
    if (location.loaded && !location.error && location.coordinates.lat && location.coordinates.lng) {
      fetchEvents(location.coordinates.lat, location.coordinates.lng);
    }
  }, [location]);

  // useEffect(() => {
  //   fetchEvents();
  // }, []);

  async function fetchEvents(lat, lng) {
    try {
    const eventsList = await svh_backend.fetchLocalEvents(lat, lng, 100.0);
    // const eventsList = await svh_backend.fetchAllEvents();
    setEvents(eventsList);
      
    } catch (error) {
        console.error("Failed to fetch events:", err);
      
    }
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