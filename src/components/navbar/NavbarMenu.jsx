const NavbarMenu = () => {
  return (
    <div className="navbar_menu">
      <a href="/about us" className="navbar_link">
        <span>About Us</span>
      </a>
      <a href="/services" className="navbar_link">
        <span>Services</span>
      </a>
      <button className="navbar_contact-btn secondary-btn">Contact</button>
    </div>
  );
};

export default NavbarMenu;
