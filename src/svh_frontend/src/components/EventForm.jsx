import Button from "./Button";
import useGoBack from '../hooks/useGoBack';

function EventForm(props) {

    const event = props.event;
    const { goBack, loading} = useGoBack();

    return (
        
      <form onSubmit={props.handleSubmit}>
        <div className='form-row'>
          <label>
            Event Name:
            <input
              type="text"
              name="name"
              value={event.name}
              onChange={props.handleChange}
              required
            />
          </label>
          <label>
            Street:
            <input
              type="text"
              name="street"
              value={event.street}
              onChange={props.handleChange}
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Category:
            <select id="event-category" onChange={ props.handleChange }>
              <option value="0">Default</option>
              <option value="1">Farmers market</option>
              <option value="2">Festival</option>
              <option value="3">Concert</option>
              <option value="4">Flea market</option>
              <option value="5">Antique show</option>
              <option value="5">Car show</option>
            </select>
          </label>
          <label>
            City:
            <input
            type="text"
              name="city"
              value={event.city}
              onChange={props.handleChange}
              required
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={event.contact}
              onChange={props.handleChange}
              required
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={event.state}
              onChange={props.handleChange}
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Creator:
            <input
              type="text"
              name="creator"
              value={event.creator}
              onChange={props.handleChange}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={event.country}
              onChange={props.handleChange}
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Phone number:
            <input
              type="tel"
              name="phone"
              value={event.phone}
              onChange={props.handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={event.email}
              onChange={props.handleChange}
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Event from date:
            <input
              type="date"
              name="fromDate"
              value={event.fromDate}
              onChange={props.handleChange}
              required
            />
          </label>
          <label>
            To date:
            <input
              type="date"
              name="toDate"
              value={event.toDate}
              onChange={props.handleChange}
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Website:
            <input
              type="url"
              name="website"
              value={event.webSite}
              onChange={props.handleChange}
            />
          </label>
          <label>
            Frequency:
            <select id="event-frequency" onChange={ props.handleChange }>
              <option value="0">One time</option>
              <option value="1">Weekly</option>
              <option value="2">Monthly</option>
              <option value="3">First Friday</option>
              <option value="4">First Saturday</option>
              <option value="5">Bi-weekly</option>
              <option value="5">Anually</option>
            </select>
          </label>
        </div>
        <div className='form-row'>
          <label>Description:
            <textarea className='description-textarea'
              name="description"
              value={event.description}
              onChange={props.handleChange}
            />
            </label>
        </div>
        <div className='dos-element-container'>
          <Button onClick={goBack} loading={loading}>Go Back</Button>
          <Button type='submit'>Create Event</Button>
        </div>
      </form>
    )
}

export default EventForm;