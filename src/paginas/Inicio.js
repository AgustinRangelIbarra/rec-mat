import React from "react";
import Temas from "../componentes/Tema";
import { Link } from "react-router-dom";
import data from '../services/data.json'

export default function Inicio() {
	{

	}
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 jumbotron">
          <h1 className="display-4">Bienvenido</h1>
          <p className="lead">
            En este sitio encontrarás material didáctico acerca de temas
            específicos del cálculo diferencial, esperemos te sean de ayuda.
          </p>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-12">

          {/* Para agregar nuevos temas se necesita utilizar el componente tema y dentro poner las rutas a los distintos ejercicios */}
          <Temas>
            {/* <Link to="/razones-de-cambio" > */}
              {/* Rapidez de crecimiento del área de un círculo */}
            {/* </Link> */}
          </Temas>
        </div>
      </div>
    </div>
  );
}
