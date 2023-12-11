import navLogo from "../images/navLogo.png"

function Navbar () {
    return (
        <nav>
        <img src={navLogo} alt="Little Lemon Logo"></img>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservation</a></li>
                <li><a>Order online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;