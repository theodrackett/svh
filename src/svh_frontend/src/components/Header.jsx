import { Link } from "react-router-dom";

function Header() {
    return (
    <header>
        <h1>Street Vendor Helper</h1>
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-event">Create Event</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/my-profile">My Profile</Link></li>
            </ul>
        </nav>
    </header>)
}

export default Header;