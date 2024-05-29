function Event(props) {
    return (
        <article class="event">
        <img src="./assets/images/FoodTruckFestival.png" alt="Event image"/>
        <h2>{props.eventName}</h2>
        <p>{props.eventFromDate}</p>
        <p>{props.eventCity}</p>
        <p>Rating: ★★★★☆</p>
        <p>{props.eventWebSite}</p>
        <a href="#" class="details-button">View Details</a>
      </article>
    )
}

export default Event;