import navLogo from "../images/navLogo.png"

function Navbar () {
    return (
        <nav className="navigation">
        <img className="navigation-logo" src={navLogo} alt="Little Lemon Logo"></img>
            <ul className="navigation-links">
                <li className="navigation-item"><a className="navigation-link" href="#">Home</a></li>
                <li className="navigation-item"><a className="navigation-link" href="#">About</a></li>
                <li className="navigation-item"><a className="navigation-link" href="#">Menu</a></li>
                <li className="navigation-item"><a className="navigation-link" href="#">Reservation</a></li>
                <li className="navigation-item"><a className="navigation-link" href="#">Order online</a></li>
                <li className="navigation-item"><a className="navigation-link" href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;