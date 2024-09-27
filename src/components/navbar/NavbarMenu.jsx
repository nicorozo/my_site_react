const NavbarMenu = () => {
  return (
    <div className="navbar_menu">
      <a href="/projects" className="navbar_link">
        <span>Projects</span>
      </a>
      <a href="/services" className="navbar_link">
        <span>Services</span>
      </a>
      <button className="navbar_contact-btn secondary-btn">Contact</button>
    </div>
  );
};

export default NavbarMenu;
