import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EventDetail from './EventDetail ';
import CreateEvent from './CreateEvent';
import Header from './Header';
import Login from './Login';
import About from './About';
import EditEvent from './EditEvent';
import WriteReview from './WriteReview';
import SignUp from './SignUp';
function App() {
    return (<Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/" element={<Header />}/>
                <Route path="/event/:id" element={<EventDetail />}/>
                <Route path="/create-event" element={<CreateEvent />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/edit-event" element={<EditEvent />}/>
                <Route path="/write-review" element={<WriteReview />}/>
                <Route path="/sign-up" element={<SignUp />}/>
            </Routes>
        </div>
    </Router>);
}
export default App;
