import img1 from "./maradona.jpg";
import img2 from "./advincula.jpg";
import "./App.css";
import { useRef } from "react";

function App() {
  const titulo = useRef();

  const acrementar = () => {
    if (titulo.current.innerHTML >= 9) {
      titulo.current.innerHTML = 1;
    } else titulo.current.innerHTML = Number(titulo.current.innerHTML) + 1;

        if (titulo.current.innerHTML == 8 || titulo.current.innerHTML == 9) {
              titulo.current.style.background = "red";
    }   else {
              titulo.current.style.background = "black";
    }
  };

  const variar = (e) => {
    if (e.target.src.includes("advincula")) {
      e.target.src = img1;
    } else {
      e.target.src = img2;
    }
  };
  const visto = (e) => {
    titulo.current.innerHTML = Number(e.target.value);
  };

  return (
    <>
      <div className="caja">
        <div>
          <img src={img1} onClick={variar} />
        </div>
        <h1 ref={titulo}></h1>
        <div>
          <button onClick={acrementar}> Hacer Click </button>
        </div>
        <input onChange={visto} />
      </div>
    
    </>
  );
}

export default App;
