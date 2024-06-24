import React, { useEffect, useState } from 'react';
import BackButton from './BackButton';
import { useLocation, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { svh_backend } from "../../../declarations/svh_backend";

function EventDetail() {

    const { id } = useParams();
    const location = useLocation();
    const [event, setEvent] = useState(location.state?.event || null);

    console.log(`The event is: ${event}`)

    useEffect(() => {
      console.log("useEffect in event deails triggered.")
      if (!event) {
        const fetchEvent = async () => {
          try {
            const eventDetails = await svh_backend.findEventById(id);
            setEvent(eventDetails);
          } catch (error) {
            console.error('Error fetching event details:', error);
          }
        };
  
        fetchEvent();
      }
    }, [id, event]);
  
    if (!event) {
      return <div>Loading...</div>;
    }

    return (
        <div className="container">
          <Header />
            <section className="event-details">
                <h2>{event.name}</h2>
                <p><strong>Category:</strong> {event.category}</p>
                <p><strong>Location:</strong> {event.street}, {event.city}, {event.state}, {event.country}</p>
                <p><strong>Date:</strong> {event.fromDate} - {event.toDate}</p>
                <p><strong>Organizer:</strong> {event.creator}</p>
                <p><strong>Contact Info:</strong></p>
                <ul>
                    <li><strong>Email:</strong> <a href={`mailto:${event.email}`}>{event.email}</a></li>
                    <li><strong>Phone:</strong> <a href={`tel:${event.phone}`}>{event.phone}</a></li>
                    <li><strong>Website:</strong> <a href={event.webSite} target="_blank" rel="noopener noreferrer">{event.webSite}</a></li>
                </ul>
            </section>
            <div className='submit-button'>
              <BackButton />
            </div>
            
          <Footer />
        </div>
    );
}

export default EventDetail;
