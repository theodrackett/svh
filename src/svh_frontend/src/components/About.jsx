import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from './Button';
import useGoBack from '../hooks/useGoBack';

function About () {

    const { goBack, loading} = useGoBack();

    return (
        <div className="container">
            <Header />
            <h2>Helping street vendors all over the world to find quality vending opportunities!</h2>
            <div className='container dos-element-container'>
                        {/* <textarea name="about-svh" id="about-svh"> */}
            <p>The Street Vendor Helper app connects street vendors with local events effortlessly. 
            With just a tap, vendors can discover all nearby events within a 100-mile radius.
            </p>
            <hr></hr>
            <p>Vendors can also share their experiences by rating events they’ve participated in, 
            while browsing reviews from fellow vendors to make informed decisions before signing up for 
            future events.</p>
            <hr></hr>
            
            <p>For event organizers, posting events is free and easy! This app not only helps you attract 
            vendors but also provides valuable feedback from vendors to help improve future events.</p>
            
            <hr></hr>
            <p>I’m constantly adding new events, but with millions happening worldwide, I need your help!
            Vendors and organizers alike—simply hit the "Create Event" button at the top, 
            fill in your details, and make your event part of our growing community.</p>
            {/* </textarea>           */}
            </div>
            <div className='container dos-element-container'>
                <Button onClick={goBack} loading={loading}>Go Back</Button>
            </div>
            <Footer />
        </div>
    )
}

export default About;