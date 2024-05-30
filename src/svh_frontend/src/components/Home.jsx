import React, { useState, useEffect } from "react";
import axios from 'axios';

import GetEvents from './GetEvents';
import Event from "./Event";

function Home() {

  const { events, loading, error } = GetEvents();

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
          {events.map(event => (
                <Event event={event[1]} />
            ))}
          </section>
        </div>
    )
}

export default Home;