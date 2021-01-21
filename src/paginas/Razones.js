import React, { useState } from "react";
import Pregunta from "../services/Pregunta";
import ScoreFinal from "../componentes/ScoreFinal";
//import Explicacion from "../componentes/Explicacion";

export default function Razones() {
  const [score, setScore] = useState(0);
  return (
    /* TITULO TEMA
			TITULO EJERCICIO 
			INSTRUCCIONES
			PLANTEAMIENTO
			PREGUNTA
			FRASE
			DISPLAY DE RESPUESTAS
			PISTA
			BOTON DE RESPUESTA
			EXPLICACION
			MATERIAL EXTRA
			RECURSOS INTERACTIVOS
	  */
    <div className="container">
      <div className="row py-5 mb-0 jumbotron">
        <main className="col-12 col-md-12">
          <h1 className="">Rapidez de crecimiento del área de un círculo</h1>
          <p className="instrucciones">
            A continuación se te presenta un ejemplo del tema “Razones de cambio
            relacionadas”. <br /> Síguelo con detenimiento:
          </p>
        </main>
      </div>
      <div className="row py-5 bg-white">
        <div className="mb-5 col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div className="wrap-anim1"></div>
        </div>
        <div className="col-12 col-md-7">
          <p className="lead">
            Al arrojar una piedra a un estanque de agua tranquila se forman
            ondas circulares concéntricas cuyos radios aumentan de longitud al
            paso del tiempo.
          </p>
          <p className="lead">
            <b>
              Cuando la onda exterior tiene un radio de 3m su radio aumenta a
              una rapidez o velocidad de 50 cm/seg.{" "}
            </b>
          </p>
          <div className="emoji"></div>
        </div>
      </div>

      <Pregunta
        setScore={setScore}
        pregunta="¿Cuál es la rapidez o velocidad en la que aumenta el área del círculo formado por dicha onda?"
        valida={4}
        a="9.22 m/s^2"
        b="2.92 m/s^2"
        c="4.42 m/s^2"
        d="9.42 m/s^2"
      />
      <div className="row">
        <div className="col-12">
          <div class="py-4">
            <p>
              Tómate un momento y reflexiona
              <br />
              <br />
              ¿Cómo se lleva a la cabo la solución?
              <br />
              <br />
              Pues bien, ahora fijate en el proceso de solución
              <br />
              <br />
              <b>
                a. Esquematizar el problema colocando los datos correspondiente
                en la figura.
              </b>
              <br />
              <br />
              <b> Analizar el problema:</b>
              <br />
              <br />
              <b>¿Cuáles son las variables y sus valores, las identificaste?</b>
              <br />
              (Determinar las variables y sus valores correspondientes)
              <br />
              <br />
              Bien ahora, veamos las fórmulas:
              <div className="explication__badge">
                <b>
                  El área del círculo es A = π r<sup>2</sup>……………….(1)
                </b>
              </div>
              La razón de cambio de A con respecto al tiempo t se obtiene
              derivando ambos miembros en la ecuación (1) con respecto al
              tiempo: <br />
              <div className="explication__badge">
                <b>
                  <sup>dA</sup>/<sub>dt</sub> = <sup>d</sup>/<sub>dt</sub> ( π r
                  <sup>2</sup> ( t ) ) = 2 π r ( t ) (<sup>dr</sup>/
                  <sub>dt</sub>
                  )……………..…(2)
                </b>
              </div>
              Para el ejemplo que se tiene en el caso particular en que:
              <div className="explication__badge">
                <b>
                  El radio: r ( t ) = 3 m y la derivada del radio con respecto
                  al tiempo: y <sup>dr</sup>/<sub>dt</sub> = 0.5 ms
                </b>
              </div>
              Sustituyendo en la ecuación (2) se tiene que: <br />
              <div className="explication__badge">
                <b>
                  <sup>dA</sup>/<sub>dt</sub> = 2π (3 m) (0.5 <sup>m</sup> /
                  <sub>s</sub>)= 3π{" "}
                  <sup>
                    m<sup>2</sup>
                  </sup>
                  /<sub>s</sub> ≈9.4248 m2s
                </b>
              </div>
              Se te facilitó... muy bien, entonces la respuesta es:
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
                <div className="card-body">9.42 m/s^2</div>
              </div>
              <br />
              <br />
              En el instante en que el radio de la onda es de 3m, su velocidad
              es de 0.5 m/seg y la velocidad de crecimiento del área del círculo
              que ha formado la onda es de 3π m2/seg o sea 9.4248 resultado
              obtenido aplicando la fórmula. <br /> <br />
              <div className="img-onda-gota"></div>
              <div className="img-circulo-onda"></div>
            </p>
            {/* <div class="alert alert-primary" role="alert">
              Material Adicional:
              <button type="button" class="btn btn-link">
                https://www.youtube.com/watch?v=w0x1oApttpk&ab_channel=1aconBerni
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <Explicacion /> */}
      <ScoreFinal score={score} />
    </div>
  );
}
