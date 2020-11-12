import React from "react";
import { Link } from "react-router-dom";

export default function Navegacion() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-main">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {/* Aqui va el logo que conseguiste en vez de recursos*/}
            Recursos Didácticos
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
