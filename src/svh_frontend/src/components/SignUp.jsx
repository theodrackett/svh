import React, { useState, useEffect } from 'react';
import { svh_backend } from "../../../declarations/svh_backend";
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import useGoBack from '../hooks/useGoBack';

// This is a placeholder for sign up. I will soon be changing it to use Internet Identity instead

function SignUp() {

    const { goBack, loading} = useGoBack();

    const [user, setUser] = useState({
        username: "",
        password: "",
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    async function createUser(event) {

        event.preventDefault();

        // Check if user exists
        
        const userDetails = await svh_backend.findUser(user.username);

        // If the user doesn't exist create it
        if (userDetails.length == 0) {
            console.log(`Creating the new user, ${user.username}`);
            svh_backend.createUser(
                user.username,
                user.password,
                user.fname,
                user.lname,
                user.email,
                user.phone);
        } else {
            console.log(`user ${user.username} already exists.`);
        }

        setUser({
            username: "",
            password: "",
            fname: "",
            lname: "",
            email: "",
            phone: ""
        });

    };

    return (
        <div className="container">
            <Header />
            <h2>Sign in</h2>
            <form onSubmit={createUser}>
                <div className="login-container">
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="text"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        First name:
                        <input
                            type="text"
                            name="fname"
                            value={user.fname}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Last name:
                        <input
                            type="text"
                            name="lname"
                            value={user.lname}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                        />
                    </label>
                    <div className='container dos-element-container'>
                        <Button onClick={goBack} loading={loading}>Go Back</Button>
                        <Button type='submit'>Submit</Button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default SignUp;