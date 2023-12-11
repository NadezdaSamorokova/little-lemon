import footerLogo from "../images/footerLogo.png"

function Footer () {
  return (
    <footer>
        <img src={footerLogo} alt="Little Lemon Logo"></img>
        <nav>
            <h6>Doormat navigation</h6>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">Order online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
        <nav>
            <h6>Contact</h6>
            <ul>
                <li><a href="#">Adress</a></li>
                <li><a href="#">Phone number</a></li>
                <li><a href="#">email</a></li>
            </ul>
        </nav>
        <nav>
            <h6>Social media links</h6>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Telegram</a></li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer;