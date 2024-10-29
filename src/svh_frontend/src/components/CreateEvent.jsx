import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Using uuid for ID generation
import Header from './Header';
import Footer from './Footer';
import { svh_backend } from "../../../declarations/svh_backend";
import axios from 'axios';
import EventForm from './EventForm';

const CreateEvent = () => {

  const [events, setEvents] = useState([]);
  const [location, setLocation] = useState({});

  const [event, setEvent] = useState({
    category: 'Default',
    city: 'Pittsburg',
    contact: 'Theo Drackett',
    country: 'United States',
    creator: 'Theo',
    description: 'Default event for testing',
    email: 'theodrackett@hotmail.com',
    fromDate: '2024-07-21',
    name: 'Default test event 1',
    phone: '555-555-5555',
    state: 'CA',
    street: '670 Railroad Ave',
    toDate: '2024-07-21',
    webSite: 'https://www.streetvendorhelper.com',
    frequency: 'Weekly'
  });

  const getCoordinatesFromAddress = async (address) => {
    const apiKey = 'c3478c58572a4700b795f022a60d73b2';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            return { lat, lng };
        } else {
            return { error: 'No location found for the specified address.' };
        }
    } catch (error) {
        return { error: error.message };
    }
  };

  function addEvent(newEvent) {
    setEvents(prevEvents => {
      svh_backend.createEvent(newEvent.category,
        newEvent.city,
        newEvent.contact,
        newEvent.country,
        newEvent.creator,
        newEvent.description,
        newEvent.email,
        newEvent.fromDate,
        newEvent.name,
        newEvent.phone,
        newEvent.state,
        newEvent.street,
        newEvent.toDate,
        newEvent.webSite,
        newEvent.frequency,
        newEvent.id,
        newEvent.rating,
        newEvent.lat,
        newEvent.lon)
      return [newEvent, ...prevEvents];
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventID = uuidv4(); // Generate a UUID for the event
    const rating = 0;
    const address = `${event.street}, ${event.city}, ${event.country}`;

    const coords = await getCoordinatesFromAddress(address);
    if (!coords.error) {
      setLocation(coords);
    } else {
      console.error(coords.error);
    };

    const lat = location.lat;
    const lng = location.lng;

    const newEvent = {
      ...event,
      id: eventID, // Attach the generated ID to the form data
      rating: rating, // Attach the default rating to the form data
      lat: lat, // Attach lat to form data
      lon: lng // Attach lon to form data
    };

    try {
      addEvent(newEvent);
      setEvent({
        category: '',
        city: '',
        contact: '',
        country: '',
        creator: '',
        description: '',
        email: '',
        fromDate: '',
        name: '',
        phone: '',
        state: '',
        street: '',
        toDate: '',
        webSite: '',
        frequency: '',
        id: '',
        rating: 0,
        lat: 0.0,
        lon: 0.0
      });
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event: ' + error.message);
    }
  };

  return (
    <div className="container">
      <Header />
      <h2>Create Event</h2>
      <EventForm event={event} handleSubmit= {handleSubmit} handleChange={handleChange}/>
      <Footer />
    </div>
  );
};

export default CreateEvent;
