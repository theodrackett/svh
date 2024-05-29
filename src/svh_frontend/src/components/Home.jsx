import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Event from "./Event";

function Home() {

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.get('/events_data_sm.json')
        .then(response => {
          const eventData = response.data.Event;
          setEvents(Object.entries(eventData));
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
        <div class="container">
          <section class="search-filter">
            <input type="text" placeholder="Search events..." />
            <select>
              <option value="all">All Categories</option>
              <option value="food">Food</option>
              <option value="clothing">Clothing</option>
              <option value="crafts">Crafts</option>
            </select>
          </section>
          <section class="event-listings">
          {events.map(([eventName, eventDetails]) => (
          // key={eventName}>
            <Event 
              eventName={eventDetails.eventName}
              eventFromDate={eventDetails.eventFromDate}
              eventCity={eventDetails.eventCity}
              eventWebSite={eventDetails.eventWebSite}
            />
        ))}
          </section>
        </div>
    )
}

export default Home;