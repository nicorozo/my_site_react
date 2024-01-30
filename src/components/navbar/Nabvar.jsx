import './Nabvar.css'

const Nabvar = () => {
  return (
    <header className='navbar'>
        <img className='logo' src="logoTemporal.png" alt="logo" />
        <div className="navbar_menu">
          <a href="" className="navbar_link">
            <span>
              About Us
            </span>
          </a>
          <a href="" className="navbar_link">
            <span>
              Services
            </span>
          </a>
        <button className='navbar_contact-btn secondary-btn'>Contact</button>
        </div>
    </header>
  )
}

export default Nabvar