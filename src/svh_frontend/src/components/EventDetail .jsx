import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { svh_backend } from "../../../declarations/svh_backend";
import Button from './Button';
import useGoBack from '../hooks/useGoBack';

function EventDetail() {

    const { goBack, loading} = useGoBack();
    const { id } = useParams();
    const location = useLocation();
    const [event, setEvent] = useState(location.state?.event || null);
    const navigate = useNavigate();

    function editEvent() {
      navigate('/edit-event', { state: { event: event } });
    };

    function writeReview() {
      navigate('/write-review');
    };

    useEffect(() => {
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
                <div className='form-row'>
                  <label>Description:
                    <textarea className='description-textarea'>{event.description}</textarea>
                    </label>
                </div>
            </section>
            <div className='container dos-element-container'>
              <Button onClick={goBack} loading={loading}>Go Back</Button>
              <Button onClick={editEvent} loading={loading}>Edit event</Button>
              <Button onClick={writeReview} loading={loading}>Write a review</Button>
            </div>
            
          <Footer />
        </div>
    );
}

export default EventDetail;
