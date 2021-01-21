import React from "react";

function Explicacion() {
  return (
    <div className="cont">
      <div className="container-btn-opciones py-4">
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
            <b>PASO 1</b> - Esquematizar el problema colocando los datos
            correspondiente en la figura.
            <br />
            <br />
            <b>PASO 2</b> - Analizar el problema:
            <br />
            <br />
            <b>¿Cuáles son las variables y sus valores, las identificaste?</b>
            <br />
            (Determinar las variables y sus valores correspondientes)
            <br />
            <br />
            Bien ahora, veamos las fórmulas:
            <div className="explication__badge">
              <i>El área del círculo es A = πr2……………….(1)</i>
            </div>
            La razón de cambio de A con respecto al tiempo t se obtiene
            derivando ambos miembros en la ecuación (1) con respecto al tiempo:{" "}
            <br />
            <div className="explication__badge">
              <i>dAdt=ddtr2t=2π rtdrdt……………..…(2)</i>
            </div>
            Para el ejemplo que se tiene en el caso particular en que:
            <div className="explication__badge">
              <i>
                El radio rt=3 m y la derivada del radio con respecto al tiempo y
                y drdt=0.5ms
              </i>
            </div>
            Sustituyendo en la ecuación (2) se tiene que: <br />
            <div className="explication__badge">
              dAdt=2 3 m0.5ms=3m2s ≈9.4248 m2s
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
            En el instante en que el radio de la onda es de 3m, su velocidad es
            de 0.5 m/seg y la velocidad de crecimiento del área del círculo que
            ha formado la onda es de 3π m2/seg o sea 9.4248 resultado obtenido
            aplicando la fórmula. <br /> <br />
            <div className="img-onda-gota"></div>
            <div className="img-circulo-onda"></div>
          </p>
          <div class="alert alert-primary" role="alert">
            Material Adicional:
            <button type="button" class="btn btn-link">
              https://www.youtube.com/watch?v=w0x1oApttpk&ab_channel=1aconBerni
            </button>
          </div>
        </div>
      </div>

      <div class="collapse" id="collapsePista">
        <div class="card card-body">
          <ul className="list-group">
            <li className="list-group-item">
              Diámetro de la piedra y velocidad
            </li>
            <li className="list-group-item">
              Su radio aumenta a una rapidez o velocidad de 50 cm/seg
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Explicacion;
