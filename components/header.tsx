const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Summer Park
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Work
          </a>
          <a className="nav-link" href="#">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
