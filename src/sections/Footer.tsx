import logo from '../assets/Group 16.png';
const Footer = () => {
  return (
    <footer className="footer" id="contact-us">
      <div className="footer__content">
        <img src={logo} alt="Yatra Nepal Logo" className="footer__logo" />
        <div className="footer__brand">
          <h3>Yatra Nepal</h3>
          <p>Building reliable digital experiences with clean design and scalable technology.</p>
        </div>

        <div className="footer__links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer__meta">
          <p>© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
