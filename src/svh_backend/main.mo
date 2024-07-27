import List "mo:base/List";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Float "mo:base/Float";

actor SVH {

  public type User = {
    username: Text;
    password: Text;
    firstName: Text;
    lastName: Text;
    email: Text;
    phone: Text;

  };

  var users: List.List<User> = List.nil<User>();

  public func createUser(
    username: Text,
    password: Text,
    firstName: Text,
    lastName: Text,
    email: Text,
    phone: Text) {

    let newUser: User = {
      username = username;
      password = password;
      firstName = firstName;
      lastName = lastName;
      email = email;
      phone = phone;
    };

    users := List.push( newUser, users);
    // Debug.print(debug_show(users));
  };

  public query func readUsers(): async [User] {
    // Returns all users
    return List.toArray(users);
  };

  public query func findUser(username: Text) : async ?User {
    return List.find<User>(users, func(user: User) : Bool {
      user.username == username;
    });
  };

  public type Event = {
    category: Text;
    city: Text;
    contact: Text;
    country: Text;
    creator: Text;
    description: Text;
    email: Text;
    fromDate: Text;
    name: Text;
    phone: Text;
    state: Text;
    street: Text;
    toDate: Text;
    webSite: Text;
    frequency: Text;
    id: Text;
    rating: Nat;
    lat: Float;
    lon: Float;
  };

  var events: List.List<Event> = List.fromArray([
    {
        category = "Arts & Craft";
        city = "Bryan";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "A vibrant street fair showcasing local art.";
        email = "info@destinationbryan.com";
        fromDate = "Apr 10, 2024";
        name = "Downtown Street and Art Fair";
        phone = "979-822-4920";
        state = "TX";
        street = "110 S Main St";
        toDate = "Apr 10, 2024";
        webSite = "https://www.downtownbryan.com/downtown-street-art-fair";
        frequency = "";
        id = "c4fa73dc-8c9d-4248-9cfa-9dc2ffc189e8";
        rating = 4;
        lat = 30.673241;
        lon = -96.373779
    },
    {
        category = "Arts & Craft";
        city = "Redmond";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Celebrate local brewers with craft beer tasting.";
        email = "wabl@washingtonbeer.com";
        fromDate = "Jun 18, 2024";
        name = "Washington Brewers Festival";
        phone = "206-795-5510";
        state = "WA";
        street = "6046 W Lake Sammamish Parkway";
        toDate = "Jun 20, 2024";
        webSite = "https://washingtonbeer.com/festivals/washington-brewers-festival.php";
        frequency = "";
        id = "4f9a734f-baf0-409e-988b-5b1690649e53";
        rating = 0;
        lat = 47.661770;
        lon = -122.125980
    },
    {
        category = "Arts & Craft";
        city = "Walla Walla";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Vintage market with antiques and collectibles.";
        email = "info@loveofjunk.com";
        fromDate = "Jun 11, 2024";
        name = "Love of Junk Walla Walla's Vintage Market";
        phone = "602-321-6511";
        state = "WA";
        street = "363 Orchard St.";
        toDate = "Jun 12, 2024";
        webSite = "https://loveofjunk.com/index.html";
        frequency = "";
        id = "8507778d-6cf1-41d3-b317-23f4f42f196a";
        rating = 3;
        lat = 37.991287;
        lon = -121.670202
    },
    {
        category = "Arts & Craft";
        city = "Anacortes";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Fun-filled festival by the waterfront.";
        email = "info@anacortes.org";
        fromDate = "Jun 05, 2024";
        name = "Waterfront Festival";
        phone = "360-293-7911";
        state = "WA";
        street = "1019 Q Avenue";
        toDate = "Jun 06, 2024";
        webSite = "https://loveofjunk.com/index.html";
        frequency = "";
        id = "16917a3b-fc8f-434f-9366-a84a3c86a5ca";
        rating = 4;
        lat = 48.513648;
        lon = -122.610631
    },
    {
        category = "Arts & Craft";
        city = "Anacortes";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Showcase of boats and yachts.";
        email = "info@anacortes.org";
        fromDate = "Jun 25, 2024";
        name = "Anacortes Boat & Yacht Show";
        phone = "360-293-7911";
        state = "WA";
        street = "Port of Anacortes’ Cap Sante Marina";
        toDate = "Jun 26, 2024";
        webSite = "https://anacortes.org/anacortes-boat-show/";
        frequency = "";
        id = "bd222e45-b794-4b69-aee6-30c1239925e5";
        rating = 3;
        lat = 48.513648;
        lon = -122.610631
    },
    {
        category = "Arts & Craft";
        city = "Packwood";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Large flea market with diverse vendors.";
        email = "";
        fromDate = "May 28, 2024";
        name = "Packwood Memorial Day Flea Market";
        phone = "425-276-2211";
        state = "WA";
        street = "Corner of US Highway 12 & Snyder Road";
        toDate = "May 31, 2024";
        webSite = "https://packwoodfleamarket.com/home";
        frequency = "";
        id = "6169aa5c-3132-4cd9-9090-371283646ad3";
        rating = 2;
        lat = 46.6078848;
        lon = -121.6556201
    },
    {
        category = "Arts & Craft";
        city = "Packwood";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Labor Day flea market with unique finds.";
        email = "";
        fromDate = "Sep 03, 2024";
        name = "Packwood Labor Day Flea Market";
        phone = "425-276-2211";
        state = "WA";
        street = "Corner of US Highway 12 & Snyder Road";
        toDate = "Sep 06, 2024";
        webSite = "https://packwoodfleamarket.com/home";
        frequency = "";
        id = "887b9280-7218-45e6-b851-b56d2665c659";
        rating = 4;
        lat = 46.6078848;
        lon = -121.6556201
    },
    {
        category = "Arts & Craft";
        city = "White Salmon";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Annual spring festival with local crafts.";
        email = "wsspringfest@gmail.com";
        fromDate = "May 28, 2024";
        name = "44th Annual Spring Festival";
        phone = "509-493-2063";
        state = "WA";
        street = "Downtown";
        toDate = "May 30, 2024";
        webSite = "https://whitesalmonspringfestival.com/";
        frequency = "";
        id = "1e402713-1d0a-4f78-8b4f-a9d2e3a08b9d";
        rating = 2;
        lat = 45.727911;
        lon = -121.486663
    },
    {
        category = "Arts & Craft";
        city = "Seattle";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Festival celebrating chocolate and confections.";
        email = "info@nwchocolate.com";
        fromDate = "Oct 30, 2024";
        name = "The Northwest Chocolate Festival";
        phone = "";
        state = "WA";
        street = "2001 West Garfield Street, Pier 91";
        toDate = "Oct 31, 2024";
        webSite = "https://www.nwchocolate.com/";
        frequency = "";
        id = "ac82d689-a3ed-450e-a463-1db5c0213907";
        rating = 4;
        lat = 47.6310336;
        lon = -122.3828351
    },
    {
        category = "Arts & Craft";
        city = "Mossyrock";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Celebration of blueberries with local vendors.";
        email = "maalblueberryfestival@gmail.com";
        fromDate = "Aug 06, 2024";
        name = "Blueberry Festival";
        phone = "360-983-3472";
        state = "WA";
        street = "Downtown";
        toDate = "Aug 07, 2024";
        webSite = "https://mossyrockfestivals.org/";
        frequency = "";
        id = "02f95ed9-7620-49bf-a3ae-1cc488502f23";
        rating = 0;
        lat = 46.5289171;
        lon = -122.4828494
    },
    {
        category = "Arts & Craft";
        city = "Darrington";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Music festival in a scenic location.";
        email = "vending@summermeltdownfest.com";
        fromDate = "Aug 05, 2024";
        name = "Summer Meltdown Festival";
        phone = "";
        state = "WA";
        street = "42501 Arlington-Darrington Rd";
        toDate = "Aug 08, 2024";
        webSite = "https://summermeltdownfest.com/rescheduled/";
        frequency = "";
        id = "fe120b6e-f366-4f52-836c-2636cd587665";
        rating = 4;
        lat = 48.27511;
        lon = -121.6555821
    },
    {
        category = "Arts & Craft";
        city = "Elma";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "County fair with rides, games, and food.";
        email = "reaston@co.grays-harbor.wa.us";
        fromDate = "Aug 04, 2024";
        name = "Grays Harbor County Fair";
        phone = "360-482-2651";
        state = "WA";
        street = "32 Elma McCleary Rd";
        toDate = "Aug 08, 2024";
        webSite = "https://www.ghcfairgrounds.com/p/about";
        frequency = "";
        id = "c172339a-6e84-4853-86a8-a8118a86c3c8";
        rating = 2;
        lat = 38.016911;
        lon = -121.814905
    },
    {
        category = "Arts & Craft";
        city = "Silvana";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Traditional fair with local crafts and food.";
        email = "info@silvanafair.com";
        fromDate = "Jul 31, 2024";
        name = "Silvana Fair";
        phone = "360-618-2076";
        state = "WA";
        street = "1331 Pioneer Highway";
        toDate = "Jul 31, 2024";
        webSite = "https://www.silvanafair.com/m.fair.html";
        frequency = "";
        id = "2371f118-93a3-432e-82d0-2c2a675085c2";
        rating = 0;
        lat = 37.935217;
        lon = -121.686481
    },
    {
        category = "Arts & Craft";
        city = "Quincy";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Music festival with a variety of artists.";
        email = "foodvendors@watershedfest.com";
        fromDate = "Jul 30, 2024";
        name = "Watershed Music Festival";
        phone = "";
        state = "WA";
        street = "754 Silica Rd NW";
        toDate = "Aug 01, 2024";
        webSite = "https://watershedfest.com/";
        frequency = "";
        id = "d0feee8e-35a9-43d8-a9dd-ef8ce9c87dd5";
        rating = 5;
        lat = 38.0306955;
        lon = -121.8842986
    },
    {
        category = "Arts & Craft";
        city = "Index";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Annual arts festival with local artists.";
        email = "";
        fromDate = "Jul 31, 2024";
        name = "Index Arts Festival";
        phone = "";
        state = "WA";
        street = "Downtown";
        toDate = "Jul 31, 2024";
        webSite = "https://indexartsfestival.wordpress.com/";
        frequency = "";
        id = "87270033-ff81-4a59-aeef-86306125961d";
        rating = 1;
        lat = 47.820254;
        lon = -121.5537622
    },
    {
        category = "Arts & Craft";
        city = "Oakley";
        contact = "Theo";
        country = "United States";
        creator = "Theo Drackett";
        description = "Summer Jam Reggae Festival";
        email = "vendorhelperapp@gmail.com";
        fromDate = "Jul 30, 2024";
        name = "Summer Jam Reggae Festival";
        phone = "555-555-1212";
        state = "CA";
        street = "500 Howard St";
        toDate = "Aug 01, 2024";
        webSite = "https://streetvendorhelper.com/";
        frequency = "";
        id = "caac5741-e706-437e-8a6e-d87dvdfba5ff";
        rating = 1;
        lat = 37.99119;
        lon = -121.670142
    },
    {
        category = "Arts & Craft";
        city = "Kirkland";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Summer festival with music, food, and crafts.";
        email = "vendors@chumpchange.org";
        fromDate = "Jul 30, 2024";
        name = "Kirkland Summerfest";
        phone = "425-456-1111";
        state = "WA";
        street = "Downtown";
        toDate = "Aug 01, 2024";
        webSite = "https://kirklandsummerfest.com/";
        frequency = "";
        id = "caac5741-e706-437e-8a6e-d87bbbfba5ff";
        rating = 1;
        lat = 37.99119;
        lon = -121.670142
    },
    {
        category = "Arts & Craft";
        city = "Silverdale";
        contact = "Event Info";
        country = "United States";
        creator = "Theo Drackett";
        description = "Festival with live music and local food.";
        email = "whalingdaysvendors@gmail.com";
        fromDate = "Jul 23, 2024";
        name = "Whaling Days Festival";
        phone = "360-830-6742";
        state = "WA";
        street = "3337 NW Byron St";
        toDate = "Jul 25, 2024";
        webSite = "https://whalingdays.com/#:~:text=We%20look%20forward%20to%20seeing,in%20%E2%80%9COld%20Town%E2%80%9D%20Silverdale.";
        frequency = "";
        id = "31b5827e-d4b3-4c40-9c5e-579eeaaf87aa";
        rating = 4;
        lat = 47.6442728;
        lon = -122.6942015
    }
]);

  public func createEvent(
    category: Text,
    city: Text,
    contact: Text,
    country: Text,
    creator: Text,
    description: Text,
    email: Text,
    fromDate: Text,
    name: Text,
    phone: Text,
    state: Text,
    street: Text,
    toDate: Text,
    webSite: Text,
    frequency: Text,
    id: Text,
    rating: Nat,
    lat: Float,
    lon: Float
    ) 
    {

      let newEvent: Event = {
        category = category;
        city = city;
        contact = contact;
        country = country;
        creator = creator;
        description = description;
        email = email;
        fromDate = fromDate;
        name = name;
        phone = phone;
        state = state;
        street = street;
        toDate = toDate;
        webSite = webSite;
        frequency = frequency;
        id = id;
        rating = rating;
        lat = lat;
        lon = lon
      };

      events := List.push(newEvent, events);
    };

    private func simpleDistance(lat1: Float, lon1: Float, lat2: Float, lon2: Float): Float {
        let dLat = lat2 - lat1;
        let dLon = lon2 - lon1;
        let scaleLat = 69.0; // Conversion factor for latitude to miles
        let scaleLon = 69.0 * Float.cos(toRadians((lat1 + lat2) / 2.0)); // Scale for longitude in miles, varies with latitude
        return Float.sqrt((dLat * scaleLat) ** 2 + (dLon * scaleLon) ** 2);
    };

    private func toRadians(degrees: Float): Float {
        return degrees * (3.141592653589793 / 180.0);
    };

    public func fetchLocalEvents(userLat: Float, userLon: Float, maxDistance: Float): async [Event] {
        let filteredEvents = List.filter(events, func (event: Event): Bool {
            let distance = simpleDistance(userLat, userLon, event.lat, event.lon);
            return distance <= maxDistance; // maxDistance in miles
        });
        return List.toArray(filteredEvents);
    };

    public func fetchAllEvents(): async [Event] {
        return List.toArray(events);
    };

    // Get a single event
    public query func findEventById(id: Text) : async ?Event {
      List.find<Event>(events, func(event: Event) : Bool {
      event.id == id
    })
  };

};
