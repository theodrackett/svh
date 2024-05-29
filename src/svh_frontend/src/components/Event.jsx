

function getRandomNumber() {
  return Math.floor(Math.random() * 25) + 1;
}

function Event(props) {
  
    const randomImage = "/assets/images/" + "photo-" + String(getRandomNumber()) + ".jpg";
    console.log(randomImage);
    return (
        <article class="event">
        <img src={randomImage} alt={props.eventName} style={{ width: '256', height: '200px', objectFit: 'cover' }} />
        <h2>{props.eventName}</h2>
        <p>{props.eventFromDate}</p>
        <p>{props.eventCity}, {props.eventState}</p>
        <p>Rating: ★★★★☆</p>
        <a href={props.eventWebSite}>Website</a>
        <a href="#" class="details-button">View Details</a>
      </article>
    )
}

export default Event;