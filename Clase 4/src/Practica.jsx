import React from "react";
import "./App.css";

function Practica({ datos, setTotal }) {
  const { style, rey, img, precio } = datos;
  const color = style;

  const comprarlo = () => {
    setTotal((prevTotal) => prevTotal + precio);
    document.getElementById(rey).style.display = "none";
  };

  return (
    <div id={rey} className="card" style={{ backgroundColor: color }}>
      <h1>{rey}</h1>
      <div>
        <img src={img}/>
      </div>
      <h2>Precio</h2>
      <h3>$ {precio}</h3>
      <button onClick={comprarlo}>Comprar</button>
    </div>
  );
}

export default Practica;

