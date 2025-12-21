const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-box">ai</span>
        <span className="logo-text">lab</span>
      </div>

      <nav className="nav-links">
        <a href="#">Services</a>
        <a href="#">Our Product</a>
        <a href="#">About Us</a>
        <a href="#">Team</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;
