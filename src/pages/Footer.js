import footerLogo from "../images/footerLogo.png"

function Footer () {
  return (
    <footer className="footer">
        <img className="footer-logo" src={footerLogo} alt="Little Lemon Logo"></img>
        <nav className="footer-navigation">
            <h6 className="navigation-title">Doormat navigation</h6>
            <ul className="footer-items">
                <li className="footer-item"><a className="navigation-link" href="#">Home</a></li>
                <li className="footer-item"><a className="navigation-link" href="#">About</a></li>
                <li className="footer-item"><a className="navigation-link" href="#">Menu</a></li>
                <li className="footer-item"><a className="navigation-link" href="#">Reservation</a></li>
                <li className="footer-item"><a className="navigation-link" href="#">Order online</a></li>
                <li className="footer-item"><a className="navigation-link" href="#">Login</a></li>
            </ul>
        </nav>
        <nav className="footer-navigation">
            <h6 className="navigation-title">Contact</h6>
            <ul className="footer-items">
                <li className="footer-item"><a className="navigation-link" href="#">Adress</a></li>
                <li className="footer-item"><a className="navigation-link" href="#">Phone number</a></li>
                <li className="footer-item"><a className="navigation-link" href="#">email</a></li>
            </ul>
        </nav>
        <nav className="footer-navigation">
            <h6 className="navigation-title">Social media links</h6>
            <ul className="footer-items">
                <li className="footer-item"><a className="navigation-link" href="#">Facebook</a></li>
                <li className="footer-item"><a className="navigation-link" href="#">Instagram</a></li>
                <li className="footer-item"><a className="navigation-link" href="#">Telegram</a></li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer;