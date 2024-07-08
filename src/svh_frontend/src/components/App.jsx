import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EventDetail from './EventDetail ';
import CreateEvent from './CreateEvent';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import EditEvent from './EditEvent';
import WriteReview from './WriteReview';

function App() {

  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Header />} />
                <Route path="/event/:id" element={<EventDetail />} />
                <Route path="/create-event" element={<CreateEvent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/edit-event" element={<EditEvent />} />
                <Route path="/write-review" element={<WriteReview />} />
            </Routes>
        </div>
    </Router>
);
}

export default App;
