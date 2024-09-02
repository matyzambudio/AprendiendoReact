import "./App.css";
import React from "react";
import Articulos from "./productos";
import a from "./assets/remeras/azul.jpg";
import b from "./assets/remeras/bocaamarilla.jpg";
import c from "./assets/remeras/bocapepsi2000.jpg";
import d from "./assets/remeras/escudo.jpg";
import e from "./assets/remeras/gris.jpg";
import f from "./assets/remeras/mangalarga.jpg";
import g from "./assets/remeras/papelitos.jpg";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const compra = (precio) => {
    setTotal((prev) => prev + precio);
  };
  return (
    <>
      <h1
        style={{
          color: "aqua",
          background: "black",
          width: "100%",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Su compra total es de $ {total}
      </h1>

      <div className="grid-container">
        <Articulos
          info={{ titulo: "Entrenamiento Azul", precio: 55000 }}
          foto={a}
          camiseta={compra}
        />
        <Articulos
          info={{ titulo: "Entrenamiento Amarilla", precio: 60000 }}
          foto={b}
          camiseta={compra}
        />
        <Articulos
          info={{ titulo: "Pepsi 2001 PreMatch", precio: 75000 }}
          foto={c}
          camiseta={compra}
        />
        <Articulos
          info={{ titulo: "Escudo Hincha", precio: 25000 }}
          foto={d}
          camiseta={compra}
        />

        <Articulos
          info={{ titulo: "Boca Gris", precio: 85000 }}
          foto={e}
          camiseta={compra}
        />

        <Articulos
          info={{ titulo: "Buzo Manga Larga", precio: 70000 }}
          foto={f}
          camiseta={compra}
        />
        <Articulos
          info={{ titulo: "Pre juego Papelitos", precio: 85.0 }}
          foto={g}
          camiseta={compra}
        />
      </div>
    </>
  );
}

export default App;
