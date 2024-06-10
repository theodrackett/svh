import React from "react";
import { useNavigate } from "react-router-dom";

function getRandomNumber() {

  return Math.floor(Math.random() * 25) + 1;
  
}

function Event(props) {
  
    const navigate = useNavigate();

    const goToDetails = () => {
      navigate(`/event/${props.event.id}`);
    };

    const randomImage = "/assets/images/" + "photo-" + String(getRandomNumber()) + ".jpg";

    return (
        <article className="event">
        <img src={randomImage} alt={props.event.eventName} style={{ width: '280', height: '200px', objectFit: 'cover' }} />
        <h2>{props.event.eventName}</h2>
        <p>{props.event.eventFromDate}</p>
        <p>{props.event.eventCity}, {props.event.eventState}</p>
        <p>Rating: ★★★★☆</p>
        <a href={props.event.eventWebSite}>Website</a>
        <button onClick={goToDetails}>View Details</button>
      </article>
    )
}

export default Event;