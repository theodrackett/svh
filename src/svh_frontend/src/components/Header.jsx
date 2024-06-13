import { Link } from "react-router-dom";

function Header() {
    return (<header>
    <div className="container nav-container">
        <h1>Street Vendor Helper</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-event">Create Event</Link></li>
                <li><Link to="/my-profile">My Profile</Link></li>
                <li><Link to="/login">Create Event</Link></li>
            </ul>
        </nav>
    </div>
</header>)
}

export default Header;