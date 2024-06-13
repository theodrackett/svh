import React, {useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Event from "./Event";
import EventDetail from "./EventDetail ";
import Search from "./Search";

function Home() {
  
  const events = [
    {
      eventCategory: "Arts & Craft",
      eventCity: "Bryan",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "info@destinationbryan.com",
      eventFromDate: "Apr 10, 2024",
      eventName: "Downtown Street and Art Fair",
      eventPhone: "979-822-4920",
      eventState: "TX",
      eventStreet: "110 S Main St",
      eventToDate: "Apr 10, 2024",
      eventWebSite: "https://www.downtownbryan.com/downtown-street-art-fair",
      frequency: "",
      id: "c4fa73dc-8c9d-4248-9cfa-9dc2ffc189e8"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Redmond",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "wabl@washingtonbeer.com",
      eventFromDate: "Jun 18, 2024",
      eventName: "Washington Brewers Festival",
      eventPhone: "206-795-5510",
      eventState: "WA",
      eventStreet: "6046 W Lake Sammamish Parkway",
      eventToDate: "Jun 20, 2024",
      eventWebSite: "https://washingtonbeer.com/festivals/washington-brewers-festival.php",
      frequency: "",
      id: "4f9a734f-baf0-409e-988b-5b1690649e53"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Walla Walla",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "info@loveofjunk.com",
      eventFromDate: "Jun 11, 2024",
      eventName: "Love of Junk Walla Walla's Vintage Market",
      eventPhone: "602-321-6511",
      eventState: "WA",
      eventStreet: "363 Orchard St.",
      eventToDate: "Jun 12, 2024",
      eventWebSite: "https://loveofjunk.com/index.html",
      frequency: "",
      id: "8507778d-6cf1-41d3-b317-23f4f42f196a"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Anacortes",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "info@anacortes.org",
      eventFromDate: "Jun 05, 2024",
      eventName: "Waterfront Festival",
      eventPhone: "360-293-7911",
      eventState: "WA",
      eventStreet: "1019 Q Avenue",
      eventToDate: "Jun 06, 2024",
      eventWebSite: "https://loveofjunk.com/index.html",
      frequency: "",
      id: "16917a3b-fc8f-434f-9366-a84a3c86a5ca"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Anacortes",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "info@anacortes.org",
      eventFromDate: "Jun 25, 2024",
      eventName: "Anacortes Boat & Yacht Show",
      eventPhone: "360-293-7911",
      eventState: "WA",
      eventStreet: "Port of Anacortes’ Cap Sante Marina",
      eventToDate: "Jun 26, 2024",
      eventWebSite: "https://anacortes.org/anacortes-boat-show/",
      frequency: "",
      id: "bd222e45-b794-4b69-aee6-30c1239925e5"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Packwood",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "",
      eventFromDate: "May 28, 2024",
      eventName: "Packwood Memorial Day Flea Market",
      eventPhone: "425-276-2211",
      eventState: "WA",
      eventStreet: "Corner of US Highway 12 & Snyder Road",
      eventToDate: "May 31, 2024",
      eventWebSite: "https://packwoodfleamarket.com/home",
      frequency: "",
      id: "6169aa5c-3132-4cd9-9090-371283646ad3"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Packwood",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "",
      eventFromDate: "Sep 03, 2024",
      eventName: "Packwood Labor Day Flea Market",
      eventPhone: "425-276-2211",
      eventState: "WA",
      eventStreet: "Corner of US Highway 12 & Snyder Road",
      eventToDate: "Sep 06, 2024",
      eventWebSite: "https://packwoodfleamarket.com/home",
      frequency: "",
      id: "887b9280-7218-45e6-b851-b56d2665c659"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "White Salmon",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "wsspringfest@gmail.com",
      eventFromDate: "May 28, 2024",
      eventName: "44th Annual Spring Festival",
      eventPhone: "509-493-2063",
      eventState: "WA",
      eventStreet: "Downtown",
      eventToDate: "May 30, 2024",
      eventWebSite: "https://whitesalmonspringfestival.com/",
      frequency: "",
      id: "1e402713-1d0a-4f78-8b4f-a9d2e3a08b9d"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Seattle",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "info@nwchocolate.com",
      eventFromDate: "Oct 30, 2024",
      eventName: "The Northwest Chocolate Festival",
      eventPhone: "",
      eventState: "WA",
      eventStreet: "2001 West Garfield Street, Pier 91",
      eventToDate: "Oct 31, 2024",
      eventWebSite: "https://www.nwchocolate.com/",
      frequency: "",
      id: "ac82d689-a3ed-450e-a463-1db5c0213907"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Mossyrock",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "maalblueberryfestival@gmail.com",
      eventFromDate: "Aug 06, 2024",
      eventName: "Blueberry Festival",
      eventPhone: "360-983-3472",
      eventState: "WA",
      eventStreet: "Downtown",
      eventToDate: "Aug 07, 2024",
      eventWebSite: "https://mossyrockfestivals.org/",
      frequency: "",
      id: "02f95ed9-7620-49bf-a3ae-1cc488502f23"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Darrington",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "vending@summermeltdownfest.com",
      eventFromDate: "Aug 05, 2024",
      eventName: "Summer Meltdown Festival",
      eventPhone: "",
      eventState: "WA",
      eventStreet: "42501 Arlington-Darrington Rd",
      eventToDate: "Aug 08, 2024",
      eventWebSite: "https://summermeltdownfest.com/rescheduled/",
      frequency: "",
      id: "fe120b6e-f366-4f52-836c-2636cd587665"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Elma",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "reaston@co.grays-harbor.wa.us",
      eventFromDate: "Aug 04, 2024",
      eventName: "Grays Harbor County Fair",
      eventPhone: "360-482-2651",
      eventState: "WA",
      eventStreet: "32 Elma McCleary Rd",
      eventToDate: "Aug 08, 2024",
      eventWebSite: "https://www.ghcfairgrounds.com/p/about",
      frequency: "",
      id: "c172339a-6e84-4853-86a8-a8118a86c3c8"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Silvana",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "info@silvanafair.com",
      eventFromDate: "Jul 31, 2024",
      eventName: "Silvana Fair",
      eventPhone: "360-618-2076",
      eventState: "WA",
      eventStreet: "1331 Pioneer Highway",
      eventToDate: "Jul 31, 2024",
      eventWebSite: "https://www.silvanafair.com/m.fair.html",
      frequency: "",
      id: "2371f118-93a3-432e-82d0-2c2a675085c2"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Quincy",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "foodvendors@watershedfest.com",
      eventFromDate: "Jul 30, 2024",
      eventName: "Watershed Music Festival",
      eventPhone: "",
      eventState: "WA",
      eventStreet: "754 Silica Rd NW",
      eventToDate: "Aug 01, 2024",
      eventWebSite: "https://watershedfest.com/",
      frequency: "",
      id: "d0feee8e-35a9-43d8-a9dd-ef8ce9c87dd5"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Index",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "",
      eventFromDate: "Jul 31, 2024",
      eventName: "Index Arts Festival",
      eventPhone: "",
      eventState: "WA",
      eventStreet: "Downtown",
      eventToDate: "Jul 31, 2024",
      eventWebSite: "https://indexartsfestival.wordpress.com/",
      frequency: "",
      id: "87270033-ff81-4a59-aeef-86306125961d"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Kirkland",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "vendors@chumpchange.org",
      eventFromDate: "Jul 30, 2024",
      eventName: "Kirkland Summerfest",
      eventPhone: "425-456-1111",
      eventState: "WA",
      eventStreet: "Downtown",
      eventToDate: "Aug 01, 2024",
      eventWebSite: "https://kirklandsummerfest.com/",
      frequency: "",
      id: "caac5741-e706-437e-8a6e-d87bbbfba5ff"
    },
    {
      eventCategory: "Arts & Craft",
      eventCity: "Silverdale",
      eventContact: "Event Info",
      eventCountry: "United States",
      eventCreator: "Kyla Escober",
      eventEmail: "whalingdaysvendors@gmail.com",
      eventFromDate: "Jul 23, 2024",
      eventName: "Whaling Days Festival",
      eventPhone: "360-830-6742",
      eventState: "WA",
      eventStreet: "3337 NW Byron St",
      eventToDate: "Jul 25, 2024",
      eventWebSite: "https://whalingdays.com/#:~:text=We%20look%20forward%20to%20seeing,in%20%E2%80%9COld%20Town%E2%80%9D%20Silverdale.",
      frequency: "",
      id: "31b5827e-d4b3-4c40-9c5e-579eeaaf87aa"
    }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const handleEventDetailsClick = (event) => {
    setSelectedEvent(event);
  };

  let content = <>{events.map(event => (
    <Event event={event} onClick={handleEventDetailsClick} />
    ))}</>

  let searchBar = <Search />
  if (selectedEvent) {
    content = <EventDetail event={selectedEvent} />;
    searchBar = <></>;
  }
    
  return (
      <div className="container">
        <Header />
        {searchBar}
        <section className="event-listings">
          {content}
        </section>
        <Footer />
      </div>
  )
}

export default Home;