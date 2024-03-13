import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const NavbarButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }
  return (
    <button className="navbar-mobile-menu-btn" onClick={openMenu}>
      {isMenuOpen ? <RxHamburgerMenu /> : <IoClose />}
    </button>
  );
};

export default NavbarButton;
