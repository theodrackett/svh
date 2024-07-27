import React, { useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { svh_backend } from "../../../declarations/svh_backend";
import { useNavigate } from "react-router-dom";
import Button from './Button';
import useGoBack from '../hooks/useGoBack';

// This is a placeholder for login. I will soon be changing it to use Internet Identity instead
function Login () {

    const { goBack, loading} = useGoBack();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    async function processUser() {
        // if user exists, log her in if the password is correct else sign her up
        const userDetails = await svh_backend.findUser(user.username);

        if (userDetails.length != 0) {
            if (user.password == userDetails[0].password){
                console.log('you are logged in!');
            } else {
                console.log('Incorrect password...please try again.');
            }
        } else {
            console.log(`${user.username} not found. Please sign up.`);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function submitUser(event) {
        processUser();
        setUser({
            username: "",
            password: ""
        });
        event.preventDefault();
    }

    function signUp() {
        // Navigate to sign up page
        navigate('/sign-up');
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
                </div>
            </form>
            <div className='container dos-element-container'>
                <Button onClick={goBack} loading={loading}>Go Back</Button>
                <Button onClick={submitUser}>Log in</Button>
                <Button onClick={signUp} loading={loading}>Don't have an account? Sign up</Button>
            </div>
            <Footer />
        </div>
    )
}

export default Login;