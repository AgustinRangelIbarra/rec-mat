// Importar librerías y recursos a utilizar

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Llamada de los Componentes

import Navegacion from "./componentes/Navegacion";
import Inicio from "./paginas/Inicio";
import Razones from "./paginas/Razones";
import Ej3 from "./paginas/Ej3";
import Footer from "./componentes/Footer";
import Ej5 from "./paginas/Ej5";

// Hoja de Estilos utilizada

import "./App.scss";

// Llamada de los componentes creados

function App() {
  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route path="/" exact={true} component={Inicio} />
        <Route path="/razones-de-cambio" component={Razones} />
        <Route path="/escalera" component={Ej3} />
        <Route path="/el-cono" component={Ej5} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
