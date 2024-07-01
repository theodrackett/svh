import React, { useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { svh_backend } from "../../../declarations/svh_backend";
import BackButton from "./BackButton";

function Login () {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function processUser() {
        // if user exists, log her in if the password is correct else sign her up
        useEffect(() => {
            console.log("useEffect in login page triggered.")
            if (user) {
            const fetchUser = async () => {
                try {
                    const userDetails = await svh_backend.findUser(user.username);
                    console.log(`user exists: ${userDetails}`);
                } catch (error) {
                    console.log('User does not exist. Go to sign up page');
                }
            };
        
            fetchUser();
            }
        }, [user.username, user]);
        }

    function handleChange(event) {
        const { name, value } = event.target;

        setUser(() => {
            return {
                [name]: value
            };
        });
    }

    function submitUser(event) {
        processUser();
        setUser({
            username: "",
            password: ""
        });
        event.preventDefault();
    }

    function signUp() {
        console.log("Ok, I will create a new user.")
    }

    return (
    <div className="container">
        <Header />
        <h2>Log in</h2>
        <form onSubmit={submitUser}>
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
                <button className='submit-button' onClick={submitUser}>Submit</button>
            </div>
        </form>
        <div>
            <button className='submit-button' onClick={signUp}>Sign up</button>
        </div>
        <Footer />
    </div>
    )
}

export default Login;