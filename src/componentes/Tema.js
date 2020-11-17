import React from "react";

export default function Tema(props) {
  return (
    <div id="accordion">
      <div className="card">
        <div
          className="card-header bg-primario"
          id="headingOne"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <h5 className="">{props.titulo}</h5>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
