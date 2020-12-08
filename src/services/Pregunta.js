import React, { useState } from "react";

export default function Pregunta({ setScore, pregunta, valida, a, b, c, d }) {
  const [activo, setActivo] = useState(true);
  const [respuesta, setRespuesta] = useState(null);
  const [borde, setBorde] = useState(null);

  function verifica(r) {
    if (valida === r && activo) {
      setRespuesta(r);
      setScore((s) => s + 10);
      setActivo(false);
      setBorde("correcto");
    } else if (valida !== r && activo) {
      setRespuesta(r);
      setActivo(false);
      setBorde("falso");
    } else {
      setBorde(borde);
    }
  }

  return (
    <div className="row py-5 bg-secundario">
      <div className="col-12 trivia">
        <p className="trivia__titulo">{pregunta}</p>
        <div className="trivia__respuestas">
          <div
            onClick={() => verifica(1)}
            className={`opcion ${respuesta === 1 ? borde : ""}`}
          >
            {a}
          </div>
          <div
            onClick={() => verifica(2)}
            className={`opcion ${respuesta === 2 ? borde : ""}`}
          >
            {b}
          </div>
          <div
            onClick={() => verifica(3)}
            className={`opcion ${respuesta === 3 ? borde : ""}`}
          >
            {c}
          </div>
          <div
            onClick={() => verifica(4)}
            className={`opcion ${respuesta === 4 ? borde : ""}`}
          >
            {d}
          </div>
        </div>
      </div>
      <div className="col-12 pt-4 text-center">
        {borde === "falso" ? (
          <div className="alert alert-danger">
            Consulta la pista o la explicación. <span>🔍</span>
          </div>
        ) : (
          <div></div>
        )}
        {borde === "correcto" ? (
          <div className="alert alert-success">
            Felicidades, has respondido correctamente. <span>👏</span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
