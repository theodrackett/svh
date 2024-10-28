import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";
import Button from './Button';
import useGoBack from '../hooks/useGoBack';
const getCoordinatesFromAddress = async (address) => {
    const apiKey = 'c3478c58572a4700b795f022a60d73b2';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            return { lat, lng };
        }
        else {
            return { error: 'No location found for the specified address.' };
        }
    }
    catch (error) {
        return { error: error.message };
    }
};
function EditEvent() {
    const { goBack, loading } = useGoBack();
    const { id } = useParams();
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            console.log(`Rating: ${index + 1} stars`);
            updateRating(index + 1);
        });
    });
    const location = useLocation();
    const [event, setEvent] = useState(location.state?.event || null);
    function updateRating(rating) {
        stars.forEach((star, index) => {
            star.computedStyleMap.color = index < rating ? '#FFC100' : 'gray';
        });
    }
    ;
    if (!event) {
        return <div>Loading...</div>;
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
        const eventID = event.id;
        const address = `${event.street}, ${event.city}, ${event.country}`;
        const coords = await getCoordinatesFromAddress(address);
        if (!coords.error) {
            setLocation(coords);
        }
        else {
            console.error(coords.error);
        }
        ;
        const lat = location.lat;
        const lng = location.lng;
        const newEvent = {
            ...event,
            id: eventID, // Attach the generated ID to the form data
            rating: event.rating, // Attach the default rating to the form data
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
        }
        catch (error) {
            console.error('Error creating event:', error);
            alert('Error creating event: ' + error.message);
        }
    };
    return (<div className="container create-event">
        <Header />
        <h2>Edit Event</h2>
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
            <Button onClick={goBack} loading={loading}>Go Back</Button>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
        <Footer />
      </div>);
}
export default EditEvent;
