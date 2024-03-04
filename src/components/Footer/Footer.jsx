import './Footer.css'; // Importing CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-logo-container">Logo</div>
      <nav className="footer-nav">
        <ul className="footer-links">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </nav>
      <div className="footer-policy">
        <div className='footer-developer'>Developed by Nico Rozo</div>
        <div className="footer-right-info">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies Settings</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;