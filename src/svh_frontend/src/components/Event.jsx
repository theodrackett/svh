import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function getRandomNumber() {

  return Math.floor(Math.random() * 25) + 1;
  
}

function Event(props) {

    const [loading, setLoading] = useState(false);
  
    const navigate = useNavigate();

    const event = props.event;

    const goToDetails = () => {
      setLoading(true);
      navigate(`/event/${props.event.id}`, { state: { event } });
      setLoading(false);
    };

    const randomImage = "/assets/images/" + "photo-" + String(getRandomNumber()) + ".jpg";

    return (
      <article className="event">
        <img src={randomImage} alt={props.event.name} style={{ width: '280', height: '200px', objectFit: 'cover' }} />
        <h2>{props.event.name}</h2>
        <p>{props.event.fromDate}</p>
        <p>{props.event.city}, {props.event.state}</p>
        <p>Rating: ★★★★☆</p>
        <a href={props.event.webSite}>Website</a>
        <Button onClick={goToDetails} loading={loading}>
          View Details
        </Button>
      </article>
    )
}

export default Event;