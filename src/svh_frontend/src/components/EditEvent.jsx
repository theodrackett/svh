import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";
import EventForm from './EventForm';

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

function EditEvent() {

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
    };
  
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
      } else {
        console.error(coords.error);
      };
  
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
      } catch (error) {
        console.error('Error creating event:', error);
        alert('Error creating event: ' + error.message);
      }
    };

    return (
      <div className="container create-event">
        <Header />
        <h2>Edit Event</h2>
        <EventForm event={event} handleSubmit= {handleSubmit} handleChange={handleChange}/>
        <Footer />
      </div>
    );
}

export default EditEvent;