import React, { useState } from "react";
import Pregunta from "../services/Pregunta";
import ScoreFinal from "../componentes/ScoreFinal";

const Ej3 = () => {
  const [score, setScore] = useState(0);
  return (
    <div className="container">
      <div className="row py-5 mb-0 jumbotron">
        <main className="col-12 col-md-12">
          <h1 className="">La escalera</h1>
          <p className="instrucciones">
            A continuación se te presenta un ejemplo del tema “Razones de cambio
            relacionadas”. <br /> Síguelo con detenimiento:
          </p>
        </main>
      </div>
      <div className="row py-5 bg-white">
        <div className="mb-5 col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div className="wrap-anim2"></div>
        </div>
        <div className="col-12 col-md-7">
          <p className="lead">
            Una escalera de 10 pies de largo está apoyada contra un muro
            vertical. Si la parte inferior de la escalera se desliza alejándose
            de la pared en una proporción de 1 pie/s.
          </p>
          <div className="emoji"></div>
        </div>
      </div>

      <Pregunta
        setScore={setScore}
        pregunta="¿Qué tan rápido la parte superior de la escalera resbala hacia abajo por la pared cuando la parte inferior de la escalera está a 6 pies del muro?"
        valida={1}
        a="3/4 pies/s"
        b="6/2 pies/s"
        c="12/6 pies/s"
        d="8/4 pies/s"
      />

      <ScoreFinal score={score} />

      <div className="cont">
        <div className="container-btn-opciones">
          <button
            class="btn btn-dark btn-opciones-tema"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExplicacion"
            aria-expanded="false"
            aria-controls="collapseExplicacion"
          >
            Explicación
          </button>

          <button
            class="btn btn-dark btn-opciones-tema"
            type="button"
            data-toggle="collapse"
            data-target="#collapsePista"
            aria-expanded="false"
            aria-controls="collapsePista"
          >
            Pista
          </button>
        </div>

        <div class="collapse" id="collapseExplicacion">
          <div class="card card-body">
            <p>
              <b>Proceso de solución</b>
              <br />
              <br />
              <b>a. Esquematizar el problema</b>
              <br />
              <br />
              Primero dibuja un esquema y anota los datos como se muestra en la
              figura 1.3. Sea x pies la distancia desde la parte inferior de la
              escalera al muro y y pies la distancia desde la parte superior de
              la escalera al piso. Observe que x y y son funciones del tiempo t
              (tiempo que se mide en segundos).
              <br />
              <br />
              <b>b. Analizar el problema</b>
              <br />
              <br />
              Se sabe que dx/dt = 1/pies y se pide determinar dy/dt cuando x=6
              pies
              <br />
              <br />
              <b>c. Determinar relaciones y efectuar operaciones</b>
              <br />
              <br />
              En este problema, la relación entre x y y la define el teorema de
              Pitágoras
              <div className="explication__badge">
                <i>x2+y2=100……………….(1)</i>
              </div>
              Al derivar con respecto a t ambos miembros en (1) aplicando la
              regla de la cadena
              <div className="explication__badge">
                <i>2x dx/dt + 2y dy/dt = 0………….(2)</i>
              </div>
              Despejar de (2) la relación deseada
              <div className="explication__badge">
                <i>dy/dt=-x/y dx/dt……………(3)</i>
              </div>
              Cuando x = 6, el teorema de Pitágoras da y = 8 y al sustituir
              estos valores en (3) y considerando que dx/dt = 1, llega a…
              <br />
              <br />
              <button
                class="btn btn-info btn-opciones-tema"
                type="button"
                data-toggle="collapse"
                data-target="#collapseRespuesta"
                aria-expanded="false"
                aria-controls="collapseRespuesta"
              >
                Respuesta
              </button>
              <div class="collapse" id="collapseRespuesta">
                <div className="card-body">
                  <div className="explication__badge">
                    <i>dy/dt = 6/8(1) = 3/4 pies/s</i>
                  </div>
                  El hecho de que dy/dt sea negativa quiere decir que la
                  distancia desde la parte superior de la escalera al suelo
                  decrece una proporción de 3/4 pies/s.
                  <br />
                  <br />
                  La parte superior de la escalera se resbala hacia debajo de la
                  pared una proporción de 3/4 pies/s.
                </div>
              </div>
              <br />
              <br />
            </p>
          </div>
        </div>

        <div class="collapse" id="collapsePista">
          <div class="card card-body">
            <ul className="list-group">
              <li className="list-group-item">
                Considerar el teorema de Pitágoras
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ej3;
