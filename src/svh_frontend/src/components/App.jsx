import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EventDetail from './EventDetail ';
import CreateEvent from './CreateEvent';
import Header from './Header';

function App() {

  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Header />} />
                <Route path="/event/:id" element={<EventDetail />} />
                <Route path="/create-event" element={<CreateEvent />} />
            </Routes>
        </div>
    </Router>
);
}

export default App;
