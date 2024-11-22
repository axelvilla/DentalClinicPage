import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light mx-5">
        <a className="navbar-brand" href="#">
          DENTAL<span className="text-primary">CLINIC</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Inicio <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios Dentales
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="#">
                +541111111111
              </a>
          </li>
          </ul>
          <button className="btn btn-outline-primary">
            Reservar consulta
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
