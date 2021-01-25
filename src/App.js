// Importar librerías y recursos a utilizar

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Llamada de los Componentes

import Navegacion from "./componentes/Navegacion";
import Inicio from "./paginas/Inicio";
import Razones from "./paginas/Razones";
import Ej2 from './paginas/Ej2'
import Ej3 from "./paginas/Ej3";
import Ej4 from "./paginas/Ej4";
import Footer from "./componentes/Footer";

// Hoja de Estilos utilizada

import "./App.scss";

// Llamada de los componentes creados

function App() {
  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/razones-de-cambio" component={Razones} />
        <Route path="/rectangulo" component={Ej2}/>
        <Route path="/escalera" component={Ej3} />
        <Route path="/el-cono" component={Ej4} />
      </Switch>
      <Footer />
    </Router>
  );
}

			// {
			// 	"titulo": "Dos Automoviles y la Intersección de los Caminos",
			// 	"url": "/escalera"
			// }

export default App;
