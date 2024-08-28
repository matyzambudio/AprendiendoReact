import { useState } from "react";
import "./App.css";
import foto1 from './img/rey_atanagildo.png';
import foto2 from './img/rey_leogivildo.png';
import foto3 from './img/rey_ervigio.png'

function App() {
  const reyes = ["Sisebuto", "Leogivildo", "Atanagildo"];

  return (
    <div className="contenedor">
      <div className="card">
        <img src={foto1} alt="" />
        <h1>{reyes[2]}</h1>
      </div>
      <div className="card">
        <img src={foto2} alt="" />
        <h1>{reyes[1]}</h1>
      </div>
      <div className="card">
        <img src={foto3} alt="" />
        <h1>{reyes[2]}</h1>
      </div>
    </div>
  );
}

export default App;
