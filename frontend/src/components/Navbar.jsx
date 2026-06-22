import React from "react";

const Navbar = ({ isLogged, onLogin, onSignup, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-logo" type="button" onClick={() => (window.location.href = "/")} aria-label="Go to home">
          <span className="logo-mark">S</span>
          <span>Slink</span>
        </button>
        <div className="navbar-links">
          {!isLogged ? (
            <>
              <button className="nav-btn secondary" onClick={onLogin}>Log in</button>
              <button className="nav-btn primary" onClick={onSignup}>Sign up</button>
            </>
          ) : (
            <button className="nav-btn secondary" onClick={onLogout}>Log out</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
