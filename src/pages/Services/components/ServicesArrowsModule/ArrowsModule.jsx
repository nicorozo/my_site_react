import "./ArrowsModule.css";

export const ArrowsSquare = ({ headline, text, icon }) => {
  return (
    <div className="ser-square-container">
      <img src={icon} alt="icon" />
      <h4>{headline}</h4>
      <p>{text}</p>
    </div>
  );
};
export const ArrowsModule = ({ children }) => {
  return <div className="ser-arrows-container">{children}</div>;
};
