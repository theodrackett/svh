import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Using uuid for ID generation
import Header from './Header';
import Footer from './Footer';
import BackButton from './BackButton';
import { svh_backend } from "../../../declarations/svh_backend";
const CreateEvent = () => {
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState({
        category: 'Default',
        city: 'Oakland',
        contact: 'Theo Drackett',
        country: 'United States',
        creator: 'Theo',
        description: 'Default event for testing',
        email: 'theodrackett@hotmail.com',
        fromDate: '2024-07-21',
        name: 'Default test event 1',
        phone: '555-555-5555',
        state: 'CA',
        street: '500 Howard St',
        toDate: '2024-07-21',
        webSite: 'https://www.streetvendorhelper.com',
        frequency: 'Weekly'
    });
    function addEvent(newEvent) {
        setEvents(prevEvents => {
            svh_backend.createEvent(newEvent.category, newEvent.city, newEvent.contact, newEvent.country, newEvent.creator, newEvent.description, newEvent.email, newEvent.fromDate, newEvent.name, newEvent.phone, newEvent.state, newEvent.street, newEvent.toDate, newEvent.webSite, newEvent.frequency, newEvent.id);
            return [newEvent, ...prevEvents];
        });
    }
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
        const newEvent = {
            ...event,
            id: eventID // Attach the generated ID to the form data
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
                frequency: ''
            });
        }
        catch (error) {
            console.error('Error creating event:', error);
            alert('Error creating event: ' + error.message);
        }
    };
    return (<div className="container create-event">
      <Header />
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className='dos-element-container'>
          <label>
            Event Name:
            <input type="text" name="name" value={event.name} onChange={handleChange} required/>
          </label>
          <label>
            Event from date:
            <input type="date" name="fromDate" value={event.fromDate} onChange={handleChange} required/>
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Category:
            <select id="event-category" onChange={handleChange}>
              <option value="0">Default</option>
              <option value="1">Farmers market</option>
              <option value="2">Festival</option>
              <option value="3">Concert</option>
              <option value="4">Flea market</option>
              <option value="5">Antique show</option>
              <option value="5">Car show</option>
            </select>
          </label>
          <label>
            City:
            <input type="text" name="city" value={event.city} onChange={handleChange} required/>
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Contact:
            <input type="text" name="contact" value={event.contact} onChange={handleChange} required/>
          </label>
          <label>
            Country:
            <input type="text" name="country" value={event.country} onChange={handleChange}/>
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Creator:
            <input type="text" name="creator" value={event.creator} onChange={handleChange}/>
          </label>
          <label>
            Email:
            <input type="email" name="email" value={event.email} onChange={handleChange}/>
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Phone number:
            <input type="tel" name="phone" value={event.phone} onChange={handleChange} required/>
          </label>
          <label>
            State:
            <input type="text" name="state" value={event.state} onChange={handleChange}/>
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Street:
            <input type="text" name="street" value={event.street} onChange={handleChange}/>
          </label>
          <label>
            To date:
            <input type="date" name="toDate" value={event.toDate} onChange={handleChange}/>
          </label>
        </div>
        <div className='dos-element-container'>
          <label>
            Website:
            <input type="url" name="website" value={event.webSite} onChange={handleChange}/>
          </label>
          <label>
            Frequency:
            <select id="event-frequency" onChange={handleChange}>
              <option value="0">One time</option>
              <option value="1">Weekly</option>
              <option value="2">Monthly</option>
              <option value="3">First Friday</option>
              <option value="4">First Saturday</option>
              <option value="5">Bi-weekly</option>
              <option value="5">Anually</option>
            </select>
          </label>
        </div>
        <div className='event-description-container'>
          <label>Description:</label>
            <textarea className='event-description' name="description" value={event.description} onChange={handleChange}/>
        </div>
        <div className='dos-element-container'>
          <BackButton />
          <button className='submit-button' type="submit">Create Event</button>
        </div>
        
      </form>
      <Footer />
    </div>);
};
export default CreateEvent;
