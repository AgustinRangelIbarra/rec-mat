import React from "react";

export default function Razones() {
  return (
    <div className="container">
      <div className="row py-4 py-mb-5">
        <main className="col-12 col-md-9">
          <h1>Rapidez de crecimiento del área de un círculo</h1>
          <p>
            Al arrojar una piedra a un estanque de agua tranquila se forman
            ondas circulares concéntricas cuyos radios aumentan de longitud al
            paso del tiempo.
          </p>
        </main>
      </div>
      <div className="row py-5 bg-white">
        <div className="col-5 d-flex align-items-center justify-content-center">
          <div className="wrap-anim"></div>
        </div>
        <div className="col-7">
          <p>
            Cuando la onda exterior tiene un radio de 3m su radio aumenta a una
            rapidez o velocidad de 50 cm/seg.
          </p>
        </div>
      </div>
      <div className="row py-5 bg-secundario">
        <div className="col-12 trivia">
          <p>
            ¿Cuál es la rapidez o velocidad en la que aumenta el área del
            círculo formado por dicha onda?
          </p>
          <div className="opcion">Opcion A</div>
          <div className="opcion">Opcion B</div>
          <div className="opcion">Opcion C</div>
        </div>
      </div>
    </div>
  );
}
