import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Using uuid for ID generation

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventCategory: '',
    eventCity: '',
    eventContact: '',
    eventCountry: '',
    eventCreator: '',
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
    <div className="create-event">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
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
          Event Date:
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
