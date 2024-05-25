import { useState } from 'react';
import { svh_backend } from 'declarations/svh_backend';

function App() {

  return (<main>
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
            <h2>Food Truck Festival</h2>
            <p>Date: June 1, 2024</p>
            <p>Location: Central Park</p>
            <p>Rating: ★★★★☆</p>
            <a href="#" class="details-button">View Details</a>
          </article>
          <article class="event">
            <h2>Clothing Bazaar</h2>
            <p>Date: June 5, 2024</p>
            <p>Location: Market Square</p>
            <p>Rating: ★★★☆☆</p>
            <a href="#" class="details-button">View Details</a>
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
