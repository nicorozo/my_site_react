import "./ServicesCard.css";

export const ServicesCardHeading = ({ tagline, headline }) => {
  return (
    <div className="ser-card">
      <h4 className="ser-tagline">{tagline}</h4>
      <h3 className="ser-headline">{headline}</h3>
    </div>
  );
};
export const ServicesCardContent = ({ children }) => {
  return <div className="ser-card">{children}</div>;
};

export const ServicesCard = ({ children }) => {
  return <div className="ser-card-container">{children}</div>;
};
