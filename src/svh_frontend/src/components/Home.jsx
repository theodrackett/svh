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

  // useEffect(() => {
  //   if (location.loaded && !location.error && location.coordinates.lat && location.coordinates.lng) {
  //     fetchEvents(location.coordinates.lat, location.coordinates.lng)
  //       .then(data => setEvents(data))
  //       .catch(err => console.error("Failed to fetch events:", err));
  //   }
  // }, [location]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents(lat, lon) {
    //const eventsList = await svh_backend.fetchLocalEvents(lat, lon, 50.0);
    const eventsList = await svh_backend.fetchAllEvents();
    console.log(`fetchEvents was called and the eventlist is: ${eventsList[0].name}`);
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