import React from "react";

const Navbar = () => {
  return (
    <div class="">
      <nav class="navbar navbar-expand-lg navbar-light mx-5">
        <a class="navbar-brand" href="#">
          DENTAL<span class="text-primary">CLINIC</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Inicio <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sobre mi
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Servicios Dentales
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Testimonios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div class="navbar">
          <ul class="navbar-nav">
          <li class="nav-item">
              <a class="nav-link" href="#">
                +541111111111
              </a>
          </li>
          </ul>
          <button class="btn btn-outline-primary">
            Reservar consulta
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
