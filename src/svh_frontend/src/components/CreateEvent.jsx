import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Using uuid for ID generation
import Header from './Header';
import Footer from './Footer';
import BackButton from './BackButton';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventCategory: 'Default',
    eventCity: 'Oakland',
    eventContact: 'Theo Drackett',
    eventCountry: 'United States',
    eventCreator: 'Theo',
    description: 'Default event for testing',
    eventEmail: 'theodrackett@hotmail.com',
    eventFromDate: '11/11/2024',
    eventName: 'Default test event 1',
    eventPhone: '555-555-5555',
    eventState: 'CA',
    eventStreet: '500 Howard St',
    eventToDate: '11/11/2024',
    eventWebSite: 'https://www.streetvendorhelper.com',
    frequency: 'Weekly'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventID = uuidv4(); // Generate a UUID for the event
    const newEvent = {
      ...formData,
      id: eventID // Attach the generated ID to the form data
    };

    try {
      const response = await fetch('http://localhost:8000/create-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
      });
      if (!response.ok) throw new Error('Failed to create event');
      const result = await response.json();
      alert('Event Created Successfully: ' + result.message);
      setFormData({
        eventCategory: '',
        eventCity: '',
        eventContact: '',
        eventCountry: '',
        eventCreator: '',
        description: '',
        eventEmail: '',
        eventFromDate: '',
        eventName: '',
        eventPhone: '',
        eventState: '',
        eventStreet: '',
        eventToDate: '',
        eventWebSite: '',
        frequency: ''
      });
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event: ' + error.message);
    }
  };

  return (
    <div className="container create-event">
      <Header />
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className='dos-element-container'>
          <label>
            Event Name:
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Event from date:
            <input
              type="date"
              name="fromDate"
              value={formData.eventFromDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Category:
            <select id="event-category" onChange={ handleChange }>
              <option value="0">Default</option>
              <option value="1">Farmers market</option>
              <option value="2">Festival</option>
              <option value="3">Concert</option>
              <option value="4">Flee market</option>
              <option value="5">Antique show</option>
              <option value="5">Car show</option>
            </select>
          </label>
          <label>
            City:
            <input
            type="text"
              name="city"
              value={formData.eventCity}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={formData.eventContact}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.eventCountry}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Creator:
            <input
              type="text"
              name="creator"
              value={formData.eventCreator}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.eventEmail}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Phone number:
            <input
              type="tel"
              name="phone"
              value={formData.eventPhone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.eventState}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Street:
            <input
              type="text"
              name="street"
              value={formData.eventStreet}
              onChange={handleChange}
            />
          </label>
          <label>
            To date:
            <input
              type="date"
              name="toDate"
              value={formData.eventToDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Website:
            <input
              type="url"
              name="website"
              value={formData.eventWebSite}
              onChange={handleChange}
            />
          </label>
          <label>
            Frequency:
            <input
              type="text"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='event-description-container'>
          <label>
            Description:
            <textarea className='event-description'
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='dos-element-container'>
          <BackButton />
          <button className='submit-button' type="submit">Create Event</button>
        </div>
        
      </form>
      <Footer />
    </div>
  );
};

export default CreateEvent;
