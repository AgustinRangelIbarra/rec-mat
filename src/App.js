// Importar librerías y recursos a utilizar

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import { useEffect } from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Llamada de los Componentes

import Navegacion from "./componentes/Navegacion";
import Inicio from "./paginas/Inicio";
import Razones from "./paginas/Ej1-Razones";
import Ej2 from './paginas/Ej2-Rectangulo';
import Ej3 from "./paginas/Ej3-Escalera";
import Ej4 from "./paginas/Ej4-ElCono";
import Footer from "./componentes/Footer";

// Hoja de Estilos utilizada

import "./App.scss";

// Llamada de los componentes creados

function App() {

  useEffect(() => {
		window.scrollTo(0, 0);
  }, []);

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

export default App;
