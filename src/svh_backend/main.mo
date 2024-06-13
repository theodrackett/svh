import List "mo:base/List";

actor SVH {

  public type Event = {
    eventCategory: Text;
    eventCity: Text;
    eventContact: Text;
    eventCountry: Text;
    eventCreator: Text;
    eventEmail: Text;
    eventFromDate: Text;
    eventName: Text;
    eventPhone: Text;
    eventState: Text;
    eventStreet: Text;
    eventToDate: Text;
    eventWebSite: Text;
    frequency: Text
  };

  var events: List.List<Event> = List.nil<Event>();

  public func createEvent(
    eventCategory: Text,
    eventCity: Text,
    eventContact: Text,
    eventCountry: Text,
    eventCreator: Text,
    eventEmail: Text,
    eventFromDate: Text,
    eventName: Text,
    eventPhone: Text,
    eventState: Text,
    eventStreet: Text,
    eventToDate: Text,
    eventWebSite: Text,
    frequency: Text
    ) 
    {

      let newEvent = {
        eventCategory = eventCategory;
        eventCity = eventCity;
        eventContact = eventContact;
        eventCountry = eventCountry;
        eventCreator = eventCreator;
        eventEmail = eventEmail;
        eventFromDate = eventFromDate;
        eventName = eventName;
        eventPhone = eventPhone;
        eventState = eventState;
        eventStreet = eventStreet;
        eventToDate = eventToDate;
        eventWebSite = eventWebSite;
        frequency = frequency
      };

      events := List.push(newEvent, events);
      // Debug.print(debug_show(events));
    };

    public func readEvents(): async [Event] {
      return List.toArray(events);
    };

};
