import { useState, useEffect } from "react";
import axios from 'axios';

function GetEvents() {


    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.get('/events_data_sm.json')
        .then(response => {
          const eventData = response.data.Event;
          setEvents(Object.entries(eventData));
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);

    return { events, loading, error };
}

export default GetEvents;