import React from "react";
import data from "../services/data.json";
import { Link } from "react-router-dom";

function Temas() {
  	return (
		data.map((postData, index) => {
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
							// eventKey={index+1}
						>
							<h5>{ postData.tema }</h5>
						</div>

						{
							postData.subtemas.map((postSubtema) => {
								return (
									<div
										id="collapseOne"
										className="collapse show"
										aria-labelledby="headingOne"
										data-parent="#accordion"
									>
										<div className="card-body">
											<Link to={postSubtema.url} className="btn btn-block btn-own-style">
												{postSubtema.titulo}
											</Link>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			)
		})
  	);
}

export default Temas;