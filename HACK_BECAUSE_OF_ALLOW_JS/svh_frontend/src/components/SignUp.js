import React, { useState, useEffect } from 'react';
import { svh_backend } from "../../../declarations/svh_backend";
import Header from './Header';
import Footer from './Footer';
function SignUp() {
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
        const userExist = await fetchUser(user.username);
        console.log(`The value of user exist is: ${userExist}`);
        // If the user doesn't exist create it
        if (!userExist) {
            console.log(`I am going to create the user: ${user.username}`);
            svh_backend.createUser(user.username, user.password, user.fname, user.lname, user.email, user.phone);
        }
        else {
            console.log(`username is blank or user already exists: ${user.username}`);
        }
        setUser({
            username: "",
            password: "",
            fname: "",
            lname: "",
            email: "",
            phone: ""
        });
    }
    ;
    async function fetchUser(username) {
        try {
            const user = await svh_backend.findUser(username);
            console.log(`The user fetched is: ${JSON.stringify(user)}`);
            // Check if the user is null or undefined
            return user !== null && user !== undefined;
        }
        catch (error) {
            console.error(`Error fetching user: ${error}`);
            return false;
        }
    }
    ;
    return (<div className="container">
            <Header />
            <h2>Sign in</h2>
            <form onSubmit={createUser}>
                <div className="login-container">
                    <label>
                        Username:
                        <input type="text" name="username" value={user.username} onChange={handleChange} required/>
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" value={user.password} onChange={handleChange} required/>
                    </label>
                    <label>
                        First name:
                        <input type="text" name="fname" value={user.fname} onChange={handleChange} required/>
                    </label>
                    <label>
                        Last name:
                        <input type="text" name="lname" value={user.lname} onChange={handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" value={user.email} onChange={handleChange} required/>
                    </label>
                    <label>
                        Phone:
                        <input type="text" name="phone" value={user.phone} onChange={handleChange}/>
                    </label>
                    <button className='submit-button' type="submit">Submit</button>
                </div>
            </form>
            <Footer />
        </div>);
}
export default SignUp;
