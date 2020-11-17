import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Navegacion() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-main sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img width="70px" src={logo} alt="Logo de Recursos Didácticos Matemáticos"/>
          </Link>
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
            <ul className="navbar-nav"></ul>
          </div>
        </div>
      </nav>
    </>
  );
}
