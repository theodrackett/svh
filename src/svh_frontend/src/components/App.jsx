import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { svh_backend } from 'declarations/svh_backend';
import Home from './Home';
import EventDetail from './EventDetail ';

function App() {

  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventDetail />} />
            </Routes>
        </div>
    </Router>
);
}

export default App;
