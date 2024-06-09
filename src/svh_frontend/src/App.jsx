import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { svh_backend } from 'declarations/svh_backend';
import Home from './components/Home';
import EventDetail from './components/EventDetail ';

function App() {

  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </Router>
);
}

export default App;
