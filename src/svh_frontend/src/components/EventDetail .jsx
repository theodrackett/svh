import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EventDetail () {
    const { id } = useParams();

    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch('/events_data_sm.json');
                const data = await response.json();
                console.log(`this is the hson data: ${data}`);
                const eventData = data.Event[id];
                console.log(`the evend id is: ${eventData}`);
                setEvent(eventData);
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };

        fetchEvent();
    }, [id]);

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <section className="event-details">
                <h2>{event.eventName}</h2>
                <p><strong>Category:</strong> {event.eventCategory}</p>
                <p><strong>Location:</strong> {event.eventStreet}, {event.eventCity}, {event.eventState}, {event.eventCountry}</p>
                <p><strong>Date:</strong> {event.eventFromDate} - {event.eventToDate}</p>
                <p><strong>Organizer:</strong> {event.eventCreator}</p>
                <p><strong>Contact Info:</strong></p>
                <ul>
                    <li><strong>Email:</strong> <a href={`mailto:${event.eventEmail}`}>{event.eventEmail}</a></li>
                    <li><strong>Phone:</strong> <a href={`tel:${event.eventPhone}`}>{event.eventPhone}</a></li>
                    <li><strong>Website:</strong> <a href={event.eventWebSite} target="_blank" rel="noopener noreferrer">{event.eventWebSite}</a></li>
                </ul>
            </section>
            <a href="/" className="back-button">Back to Events</a>
        </div>
    );
}

export default EventDetail;
