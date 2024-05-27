function Home() {
    return (
        <div class="container">
          <section class="search-filter">
            <input type="text" placeholder="Search events..." />
            <select>
              <option value="all">All Categories</option>
              <option value="food">Food</option>
              <option value="clothing">Clothing</option>
              <option value="crafts">Crafts</option>
            </select>
          </section>
          <section class="event-listings">
            <article class="event">
              <img src="./assets/images/FoodTruckFestival.png" alt="Event image"/>
              <h2>Food Truck Festival</h2>
              <p>Date: June 1, 2024</p>
              <p>Location: Central Park</p>
              <p>Rating: ★★★★☆</p>
              <a href="#" class="details-button">View Details</a>
            </article>
            <article class="event">
              <img src="./assets/images/Clothing_Bazaar.webp" alt="Event image"/>
              <h2>Clothing Bazaar</h2>
              <p>Date: June 5, 2024</p>
              <p>Location: Market Square</p>
              <p>Rating: ★★★☆☆</p>
              <a href="#" class="details-button">View Details</a>
            </article>
            <article class="event">
              <img src="./assets/images/Pottery_Bonanza.webp" alt="Event image"/>
              <h2>Pottery Bonanza</h2>
              <p>Date: July 25, 2024</p>
              <p>Location: Back a Yard</p>
              <p>Rating: ★★★☆☆</p>
              <a href="#" class="details-button">View Details</a>
            </article>
            <article class="event">
              <img src="./assets/images/FoodTruckFestival.png" alt="Event image"/>
              <h2>Food Truck Festival</h2>
              <p>Date: June 1, 2024</p>
              <p>Location: Central Park</p>
              <p>Rating: ★★★★☆</p>
              <a href="#" class="details-button">View Details</a>
            </article>
            <article class="event">
              <img src="./assets/images/Clothing_Bazaar.webp" alt="Event image"/>
              <h2>Clothing Bazaar</h2>
              <p>Date: June 5, 2024</p>
              <p>Location: Market Square</p>
              <p>Rating: ★★★☆☆</p>
              <a href="#" class="details-button">View Details</a>
            </article>
            <article class="event">
              <img src="./assets/images/Pottery_Bonanza.webp" alt="Event image"/>
              <h2>Pottery Bonanza</h2>
              <p>Date: July 25, 2024</p>
              <p>Location: Back a Yard</p>
              <p>Rating: ★★★☆☆</p>
              <a href="#" class="details-button">View Details</a>
            </article>
          </section>
        </div>
    )
}

export default Home;