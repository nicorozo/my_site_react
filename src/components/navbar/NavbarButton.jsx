import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const NavbarButton = ({ handleMenuOpen, isModal }) => {
  return (
    <button
      className={`navbar-mobile-menu-btn ${isModal && "navbar-closing-btn"}`}
      onClick={() => handleMenuOpen()}
    >
      {isModal ? <IoClose /> : <RxHamburgerMenu />}
    </button>
  );
};

export default NavbarButton;
