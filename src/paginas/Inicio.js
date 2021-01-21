import React from "react";
import Temas from "../componentes/Tema";

export default function Inicio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 jumbotron">
          <h1 className="display-4">Bienvenido, estudiante</h1>
          <p className="lead">
            <br />
            Te damos la bienvenida al espacio que te permitirá analizar la
            solución de ejercicos sobre cálculo. <br />
            <br />
            A continuación se te presentan ejemplos del tema: <br />
            <br /> "Razones de Cambio Relacionadas" <br />
            <br /> Síguelos con detenimiento. <br />
            <br /> Te iran mostrando, lo que se sabe y lo que se pide del
            problema.
          </p>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-12">
          <Temas />
          {/* Muestra en pantalla todos los temas del JSON */}
        </div>
      </div>
    </div>
  );
}
