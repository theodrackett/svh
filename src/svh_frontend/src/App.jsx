import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { svh_backend } from 'declarations/svh_backend';
import Home from './components/Home';
import EventDetail from './components/EventDetail ';

function App() {

  // return (<main>
  //   <Home />
  //   </main>
  // );
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
