import React from "react";
import Temas from "../componentes/Tema";


export default function Inicio() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 jumbotron">
          <h1 className="display-4">Bienvenido, estudiante!</h1>
          <p className="lead">
            En este sitio encontrarás material didáctico acerca de temas
            específicos del cálculo diferencial, esperemos te sean de ayuda.
          </p>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-12">
          <Temas/>
          {/* Muestra en pantalla todos los temas del JSON */}
        </div>
      </div>
    </div>
  );
}
