const Logo = () => {
  const logo = <img src="logo.png" alt="logo" />;
  return (
    <a className="navbar-logo-container" href="/">
      {logo}
    </a>
  );
};

export default Logo;
