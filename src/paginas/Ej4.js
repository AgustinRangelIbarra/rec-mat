import React, { useState } from "react";
import Pregunta from "../services/Pregunta";
import ScoreFinal from "../componentes/ScoreFinal";

const Ej5 = () => {
  const [score, setScore] = useState(0);
  return (
    <div className="container">
      <div className="row py-3 py-mb-5 jumbotron">
        <main className="col-12 col-md-12">
          <h1 className="">El Cono - Depósito de Agua</h1>
          <p className="instrucciones">
            A continuación se te presenta un ejemplo del tema “Razones de cambio
            relacionadas”. <br /> Síguelo con detenimiento:
          </p>
        </main>
      </div>
      <div className="row py-5 bg-white">
        <div className="mb-5 col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div className="wrap-anim4"></div>
        </div>
        <div className="col-12 col-md-7">
          <p className="lead">
			 Un depósito para agua tiene la forma de un cono circular invertido, el radio de la base es de 2 m, y la altura es de 4 m. Si el agua se bombea hacia el depósito a una razón de 2m3/min.
          </p>
          <div className="emoji"></div>
        </div>
      </div>

      <br/>

      <div className="cont">
        <div className="container-btn-opciones">
          {/* <button
            class="btn btn-dark btn-opciones-tema"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExplicacion"
            aria-expanded="false"
            aria-controls="collapseExplicacion"
          >
            Explicación
          </button> */}
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
        <div class="collapse" id="collapsePista">
          <div class="card card-body">
            <ul className="list-group">
              <li className="list-group-item">
					Lorem ipsum dolor sit amet.
              </li>
              <li className="list-group-item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
          <br/>
      <Pregunta
        setScore={setScore}
        pregunta="Determine la rapidez a la cual el nivel del agua sube cuando el agua tiene 3 m. de profundidad:"
        valida={2}
        a="1.0000 m/min"
        b="0.2829 m/min"
        c="0.5164 m/min"
        d="0.4321 m/min"
      />

      <ScoreFinal score={score} />

      <p>
              <b>Proceso de solución</b>
              <br />
              <br />
              <b>a. Esquematizar el problema</b>
              <br />
              <br />
				  Primero elabore un diagrama del cono y anote la información como en la figura 1.5. Sean V, r y h el volumen del agua, el radio de la superficie circular y la             altura en el tiempo t, respectivamente, donde t se mide en minutos.
              <br />
              <br />
              <b>b. Analizar el problema</b>
              <br />
              <br />
              Se sabe que dVdt=2m3min y se pide determinar dhdt cuando h es 3 m. Las cantidades V y h se relacionan mediante la ecuación (1)
              <br />
				  <div className="explication__badge">
                <i>V=13r2h……………….(1)</i>
				  </div>
              <br />
              <b>c. Determinar relaciones y efectuar operaciones</b>
              <br />
              <br />
              Pero es muy útil expresar V sólo en función de h. Con objeto de eliminar r, recurra a los triángulos semejantes en la figura 1.5 para escribir:
              <div className="explication__badge">
                <i>rh=24           r=h2  ……………(2)</i>
              </div>
              Al sustituir (2) en (1),  la expresión para V se vuelve
              <div className="explication__badge">
                <i>V=13h22h=12h3………..(3)</i>
              </div>
              Ahora puede derivar con respecto a t cada miembro de la expresión (3):
              <div className="explication__badge">
                <i>dVdt=4h2dhdt…………(4)</i>
              </div>
				  Al despejar en (4), se obtiene:
				  <div className="explication__badge">
                <i>dhdt=4h2dVdt…………(5)</i>
              </div>
				  Al sustituir h=3 m y dVdt=2m3min, en (5), obtiene
				  <div className="explication__badge">
                <i>dhdt = 432*2 = 89</i>
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
                    <i>La rapidez a la cual el nivel del agua sube cuando el agua tiene 3 m. de profundidad es de 0.2829  m3/min</i>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </p>


      </div>
    </div>
  );
};

export default Ej5;
