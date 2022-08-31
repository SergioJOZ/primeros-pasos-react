import logo from "./logo.svg";
import "./App.css";
import MiComponente from "./MiComponente";
import { SegundoComponente } from "./SegundoComponente";
import { TercerComponente } from "./TercerComponente";

function App() {
  const fichaMedica = {
    altura: "175cm",
    grupo: "A",
    estado: "Bien",
    alergias: "ninguna",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Cargar mi primer componente */}
        <div className="componentes">
          <hr />
          <TercerComponente ficha={fichaMedica} />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
