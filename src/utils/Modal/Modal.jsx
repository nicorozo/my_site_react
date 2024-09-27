import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal">
      <h3>Menu</h3>
      <div className="modal-items-container">
        <a href="/projects" className="modal-link">
          <span>Projects</span>
        </a>
        <a href="/services" className="modal-link">
          <span>Services</span>
        </a>
      </div>
      <button className="modal-contact-btn secondary-btn">Contact</button>
    </div>
  );
};

export default Modal;
