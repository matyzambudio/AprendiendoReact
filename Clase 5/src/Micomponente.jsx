import React from "react";
import "./App.css";

function Micomponente(props) {
  const { datos , dalecompra } = props;

  const compra =() =>{
     dalecompra(datos.precio);
  }

  return (
   
      <div
        style={{
          display: "inline-flex",
          justifyContent: "space-evenly",
          border: "solid 1px black",
        }}
      >
        <div style={{ background: "pink", margin: "2%", textAlign: "center" }}>
          <div style={{ width: "100%" }}>
            <img src={datos.img} />
          </div>
          <h1
            style={{ fontFamily: "cursive", fontSize: "20px", width: "100%" }}
          >
            {datos.nombre}
          </h1>
          <h2>{datos.caracteristicas}</h2>
          <h3>{datos.precio}</h3>
          <button
            style={{ background: "blue", color: "white", padding: "10px" }} onClick={compra}>
            Comprar
          </button>
          <h2>{compra}</h2>
        </div>
      </div>
  
  );
}

export default Micomponente;
