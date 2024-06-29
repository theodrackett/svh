import React, { useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { svh_backend } from "../../../declarations/svh_backend";

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

    return (
    <div className="container">
        <Header />
        <h2>Sign on</h2>
        <form onSubmit={submitUser}>
            <div  className='dos-element-container'>
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
                onClick({submitUser});
            </div>
        </form>
        <Footer />
    </div>
    )
}

export default Login;