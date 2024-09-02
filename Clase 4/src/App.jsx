import MiComponente from "./MiComponente";
import MiComponenteDos from "./MiComponenteDos";
import Practica from "./Practica";
import { useState } from 'react';
import "./index.css";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <>
      {/* Ejemplos
    <h2>Reyes godos:</h2>
     <MiComponente reses={25} vivo={true}/>
     <MiComponente rey="Ervigio" vivo={false}/>
     <MiComponenteDos dato={{nombre:"Matias",apellido:"zambudio",pais:"Argentina",edad:32}} />
     <MiComponenteDos dato={{nombre:"Claudio",apellido:"Lopez",pais:"Chile",edad:18}} />
    */}
      <h1 id="total">Total a pagar: $ {total}</h1>
      <div className="contenedor">
        <Practica
          datos={{
            style: "pink",
            rey: "Atanagildo",
            img: "../src/imagenes/rey_atanagildo.png",
            precio: 150,
          }}
          setTotal={setTotal}
        />
        <Practica
          datos={{
            style: "red",
            rey: "Ataulfo",
            img: "../src/imagenes/rey_ataulfo.png",
            precio: 750,
          }}
          setTotal={setTotal}
        />
        <Practica
          datos={{
            style: "blue",
            rey: "Ervigio",
            img: "../src/imagenes/rey_ervigio.png",
            precio: 350,
          }}
          setTotal={setTotal}
        />
        <Practica
          datos={{
            style: "yellow",
            rey: "Leogivildo",
            img: "../src/imagenes/rey_leogivildo.png",
            precio: 220,
          }}
          setTotal={setTotal}
        />
        <Practica
          datos={{
            style: "orange",
            rey: "Recesvinto",
            img: "../src/imagenes/rey_recesvinto.png",
            precio: 330,
          }}
          setTotal={setTotal}
        />
        <Practica
          datos={{
            style: "aqua",
            rey: "Sisebuto",
            img: "../src/imagenes/rey_sisebuto.png",
            precio: 550,
          }}
          setTotal={setTotal}
        />
      </div>
    </>
  );
}

export default App;