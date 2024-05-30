
import React from 'react';
import GetEvents from './GetEvents';

const EventDetail = () => {
    const events = GetEvents();

    return (
        <div className="container">
            <section className="event-details">
                {events.map(([eventName, eventDetails]) => (
                        <><h2>{eventDetails.eventName}</h2>
                        <p><strong>Category:</strong> {eventDetails.eventCategory}</p>
                        <p><strong>Location:</strong> {eventDetails.eventStreet}, {eventDetails.eventCity}, {eventDetails.eventState}, {eventDetails.eventCountry}</p><p><strong>Date:</strong> {eventDetails.eventFromDate} - {eventDetails.eventToDate}</p><p><strong>Organizer:</strong> {eventDetails.eventCreator}</p><p><strong>Contact Info:</strong></p><ul>
                        <li><strong>Email:</strong> <a href={`mailto:${eventDetails.eventEmail}`}>{eventDetails.eventEmail}</a></li>
                        <li><strong>Phone:</strong> <a href={`tel:${eventDetails.eventPhone}`}>{eventDetails.eventPhone}</a></li>
                        <li><strong>Website:</strong> <a href={eventDetails.eventWebSite} target="_blank" rel="noopener noreferrer">{eventDetails.eventWebSite}</a></li>
                    </ul></>
                        ))}
            </section>
            <a href="#" className="back-button">Back to Events</a>
        </div>
    );
};

export default EventDetail;
