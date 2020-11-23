import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navegacion from "./componentes/Navegacion";
import Inicio from "./paginas/Inicio";
import Razones from "./paginas/Razones";
import "./App.scss";
import Footer from './componentes/Footer'

function App() {
  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route path="/" exact={true} component={Inicio} />
        <Route path="/razones-de-cambio" component={Razones} />
      </Switch>
		<Footer/>
    </Router>
  );
}

export default App;
