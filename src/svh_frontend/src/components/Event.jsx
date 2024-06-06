import { Link } from "react-router-dom";

function getRandomNumber() {
  return Math.floor(Math.random() * 25) + 1;
}

function Event(props) {
  
    const randomImage = "/assets/images/" + "photo-" + String(getRandomNumber()) + ".jpg";

    return (
        <article class="event">
        <img src={randomImage} alt={props.event.eventName} style={{ width: '280', height: '200px', objectFit: 'cover' }} />
        <h2>{props.event.eventName}</h2>
        <p>{props.event.eventFromDate}</p>
        <p>{props.event.eventCity}, {props.event.eventState}</p>
        <p>Rating: ★★★★☆</p>
        <a href={props.event.eventWebSite}>Website</a>
        <Link to={`/event/${props.event.id}`} className="details-button">View Details</Link>
      </article>
    )
}

export default Event;