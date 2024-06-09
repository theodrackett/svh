import React, { useState, useEffect } from 'react';

function EventDetail (props) {

    return (
        <div className="container">
            <section className="event-details">
                <h2>{props.event.eventName}</h2>
                <p><strong>Category:</strong> {props.event.eventCategory}</p>
                <p><strong>Location:</strong> {props.event.eventStreet}, {props.event.eventCity}, {props.event.eventState}, {props.event.eventCountry}</p>
                <p><strong>Date:</strong> {props.event.eventFromDate} - {props.event.eventToDate}</p>
                <p><strong>Organizer:</strong> {props.event.eventCreator}</p>
                <p><strong>Contact Info:</strong></p>
                <ul>
                    <li><strong>Email:</strong> <a href={`mailto:${props.event.eventEmail}`}>{props.event.eventEmail}</a></li>
                    <li><strong>Phone:</strong> <a href={`tel:${props.event.eventPhone}`}>{props.event.eventPhone}</a></li>
                    <li><strong>Website:</strong> <a href={props.event.eventWebSite} target="_blank" rel="noopener noreferrer">{props.event.eventWebSite}</a></li>
                </ul>
            </section>
            <a href="/" className="back-button">Back to Events</a>
        </div>
    );
}

export default EventDetail;
